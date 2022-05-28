import axios from 'axios';
const jsonAPI = {
  cache: {},
  cachedGet(url) {
    if (this.cache[url] !== undefined) {
      return Promise.resolve(this.cache[url]);
    }

    return axios.get(url).then((response) => this.cacheURL(url, response.data));
  },
  cacheURL: function (url, data) {
    this.cache[url] = data;
    return data;
  },
};
export default jsonAPI;
