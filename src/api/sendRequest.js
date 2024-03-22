import axios from "axios";

const instance = axios.create({
  baseURL: "https://requests-tests-api.onrender.com",
});

export const sendRequest = async (requests) => {
  try {
    const {
      data: { index },
    } = await instance.post("/api", {
      index: requests,
    });

    return index;
  } catch (error) {
    console.log(error.statusText);
  }
};
