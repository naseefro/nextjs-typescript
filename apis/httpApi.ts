import axios, { AxiosResponse } from "axios"

const instance = axios.create({
  baseURL: "https://kitsu.io/api/edge",
});

const errorHandler = (error: any) => {
  if (error.response.status === 404) {
    throw new Error(`${error.config.url} not found`);
  }
  console.log("Error found!");

  return Promise.reject({ ...error })
}

const successHandler = (response: AxiosResponse<any>) => {
  console.log("Api response success")
  return response
}

// Request interceptor
instance.interceptors.response.use(
  res => successHandler(res),
  err => errorHandler(err)
);


export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  patch: instance.patch,
  delete: instance.delete,
  apiBaseUrl: instance.defaults.baseURL,
};
