import axios from 'axios';

export default {
  setUp(link) {
    return axios.get(`${link}`);
  },
};
