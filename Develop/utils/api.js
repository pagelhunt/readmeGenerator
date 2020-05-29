const axios = require("axios");

const api = {
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`)
    .catch(error => {
      error
    });
  }
};

module.exports = api;
