import axios from "axios";

export const getProducts = async function () {
  try {
    const response = await axios.get(`${process.env.API_URL}`);
    const data = response.data;
    return data;
  } catch (error) {
    if (error) {
      console.error(error);
      throw new Error("Products could not be loaded", error);
    }
  }
};
