import axios from 'axios';

const BASE_URL = 'http://localhost:3000/game/';
const MIDDLE_URL = '/player/';
const END_URL = '/board';

export default {
  setup ({ gameId, playerId, shipArray }) {
    const link = `${BASE_URL}${gameId}${MIDDLE_URL}${playerId}${END_URL}`;
    return axios.put(`${link}`, shipArray);
  },
};
