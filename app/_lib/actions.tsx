import axiosInstance from "./axios";

export const getCabins = async function () {
  try {
    const response = await axiosInstance.get("/");
    const data = response.data;
    return data;
  } catch (error) {
    if (error) {
      console.error(error);
      throw new Error("Cabins could not be loaded");
    }
  }
};
