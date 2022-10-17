import axios from "axios";
const URL_BACKEND = process.env.NEXT_PUBLIC_URL_BACKEND;
export const getBreeds = () => {
  return axios.get(URL_BACKEND + "/cats");
};

export const getMostSearchedBreeds = async () => {
  const response = await axios.get(URL_BACKEND + "/cats/getMostSearched");
  return response.data;
};

export const updateTimesSearched = async (id) => {
  const response = await axios.patch(
    URL_BACKEND + "/cats/updateTimesSearched/" + id
  );
  return response.data;
};
