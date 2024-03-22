import axios from "axios";

export const sendRequest = async (requests) => {
  try {
    const {
      data: { index },
    } = await axios.post("http://localhost:8080/api", {
      index: requests,
    });

    return index;
  } catch (error) {
    console.log(error.statusText);
  }
};
