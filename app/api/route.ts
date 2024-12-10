import axios from "axios";
import { Ratelimit } from "@upstash/ratelimit";
import { NextRequest } from "next/server";
import { Redis } from "@upstash/redis";

const API_URL = "https://fakestoreapi.com/products";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Create a new rateLimit instance
const rateLimit = new Ratelimit({
  redis, // Use Vercel KV for storage
  limiter: Ratelimit.slidingWindow(5, "1m"), // Limit to 5 requests per minute
});

// set the runtime to edge so that the function runs on the edge
export const runtime = "edge";

export async function GET(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for");

  const { success } = await rateLimit.limit(`ratelimit_${ip}`);

  if (!success) {
    return Response.json(
      {
        message: "Too many requests, please try again later.",
      },
      {
        status: 429,
      }
    );
  }

  try {
    const response = await axios.get(API_URL);
    return Response.json(response.data);
  } catch (error) {
    if (error) {
      console.error(error);
      throw new Error("Products could not be loaded", error);
    }
  }
}
