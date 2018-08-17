import apiConfig from './config';

export default {
  getGeneros: function (success) {
    return fetch(`${apiConfig.constants.url_api}/api/v1/generos`, {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(apiConfig.methods.checkStatus)
    .then(apiConfig.methods.parseJSON)
    .then(success);
  },
  getGenero: function (id, success) {
    return fetch(`${apiConfig.constants.url_api}/api/v1/generos/${ id }`, {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(apiConfig.methods.checkStatus)
    .then(apiConfig.methods.parseJSON)
    .then(success);
  },
  createGenero: function (data, success, error) {
    return fetch(`${apiConfig.constants.url_api}/api/v1/generos`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(apiConfig.methods.checkStatus)
    .then(apiConfig.methods.parseJSON)
    .then(success)
    .catch(apiConfig.methods.error)
    .then(error);
  },
  updateGeneros: function (data, success, error) {
    return fetch(`${apiConfig.constants.url_api}/api/v1/generos/${ data.id }`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(apiConfig.methods.checkStatus)
    .then(apiConfig.methods.parseJSON)
    .then(success)
    .catch(apiConfig.methods.error)
    .then(error);
  },
  deleteGenero: function (id, success, error) {
    return fetch(`${apiConfig.constants.url_api}/api/v1/generos/${ id }`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(apiConfig.methods.checkStatus)
    .then(apiConfig.methods.parseJSON)
    .then(success)
    .catch(apiConfig.methods.error)
    .then(error);
  },
};
