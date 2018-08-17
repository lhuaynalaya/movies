import apiConfig from './config';

export default {
  getPeliculas: function (success) {
    return fetch(`${apiConfig.constants.url_api}/api/v1/peliculas`, {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(apiConfig.methods.checkStatus)
    .then(apiConfig.methods.parseJSON)
    .then(success);
  },
  getPelicula: function (id, success) {
    return fetch(`${apiConfig.constants.url_api}/api/v1/peliculas/${ id }`, {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(apiConfig.methods.checkStatus)
    .then(apiConfig.methods.parseJSON)
    .then(success);
  },
  createPelicula: function (data, success, error) {
    return fetch(`${apiConfig.constants.url_api}/api/v1/peliculas`, {
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
  updatePeliculas: function (data, success, error) {
    return fetch(`${apiConfig.constants.url_api}/api/v1/peliculas/${ data.id }`, {
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
  deletePelicula: function (id, success, error) {
    return fetch(`${apiConfig.constants.url_api}/api/v1/peliculas/${ id }`, {
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
