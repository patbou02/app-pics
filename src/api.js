import axios from 'axios';

const ACCESS_KEY = 'RoFoMpzx6JBLjGCMaopwaObdiKZ2LgJ4gAfIDhdlBq4';
const LOCATION   = 'https://api.unsplash.com';
const PATH       = '/search/photos';

const URL_REQUEST = LOCATION + PATH;

const searchImages = async (term) => {
  const response = await axios.get(URL_REQUEST, {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    params: { query: term }
  });

  return response.data.results;
};

export default searchImages;