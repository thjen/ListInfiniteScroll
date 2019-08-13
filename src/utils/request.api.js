import axios from 'axios';

export const call = (page) => {
  return axios({
    method: 'GET',
    url: `https://phonghoctructuyen.com/api/all-class?page=${page}`,
    data: null
  }).catch((err) => console.log('err: ' + err));
}