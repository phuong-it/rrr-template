import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

type HttpClientInstance = {
  api: AxiosInstance,
  setToken: Function;
};

export const httpClient = (config: AxiosRequestConfig): HttpClientInstance => {
  let token = '';

  const instance = axios.create(config);

  instance.interceptors.request.use((config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  });

  return {
    api: instance,
    setToken: (_token: string) => {
      token = _token;
    },
  };
};
