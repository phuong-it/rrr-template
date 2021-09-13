import { httpClient } from '../api/request';

const BASE_URL = process.env.REACT_APP_HOST_BACKEND;

const client = httpClient({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
