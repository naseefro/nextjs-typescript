import axios, { AxiosResponse } from "axios"

// interface ServerResponse {
//   data: ServerData
// }

// interface ServerData {
//   foo: string
//   bar: number
// }
// axios.request<ServerData>({
//   url: 'https://example.com/path/to/data',
//   transformResponse: (r: ServerResponse) => r.data
// }).then((response) => {
//   // `response` is of type `AxiosResponse<ServerData>`
//   const { data } = response
//   // `data` is of type ServerData, correctly inferred
// })


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
  console.log("Success")
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
