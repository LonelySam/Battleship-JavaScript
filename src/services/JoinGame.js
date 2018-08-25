import axios from 'axios';

export default {
  joinLink (link) {
    return axios.get(`${link}`);
  },
};
