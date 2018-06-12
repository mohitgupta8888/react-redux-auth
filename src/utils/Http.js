
import { authHeader } from './AuthHeader';

const sendRequest = (url, params) => {
  const requestOptions = {
    ...params,
    headers: params.headers ? { ...params.headers, ...authHeader() } : authHeader()
  };
  return fetch(url, requestOptions);
}

export const httpService = {
  get(url, params) {
    const requestOptions = {
      ...params,
      method: 'GET'
    };

    return sendRequest(url, requestOptions);
  },
  post(url, params) {
    const requestOptions = {
      ...params,
      method: 'POST'
    };

    return sendRequest(url, requestOptions);
  }
};