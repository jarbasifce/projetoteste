import api from './api';

export const login = (data) => {
  return api.post('/auth', data);
};
