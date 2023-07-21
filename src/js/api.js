import { API_URL, SITE_ID } from './config.js';

import axios from 'axios';

export const $localApi = axios.create({
   baseURL: API_URL,
   params: {
      site_id: SITE_ID,
   },
});
export const $formApi = axios.create({
   baseURL: API_URL + '/form/add',
   headers: {
      'Content-Type': 'multipart/form-data',
   },
});
