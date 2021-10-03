import axios from "axios";
import queryString from "query-string";

const BASE_URL = "https://api.stackexchange.com/2.3";

const params = {
  order: "desc",
  sort: "activity",
  site: "stackoverflow",
  accepted: true
};

export const getQuestions = (value: string) => {
  const query = queryString.stringify({
    ...params,
    intitle: value
  });
  const result = axios
    .get(`${BASE_URL}/search/?${query}`)
    .then((result) => result?.data)
    .catch((error) => { throw error; });
  return result;
};

export const getQuestionsByAdvanceSearch = (value: string) => {
  const query = queryString.stringify({
    ...params,
    q: value
  });
  const result = axios
    .get(`${BASE_URL}/search/advanced?${query}`)
    .then((result) => result?.data)
    .catch((error) => { throw error; });
  return result;
};
