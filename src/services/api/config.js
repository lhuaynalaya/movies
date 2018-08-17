import Page from './page';

export default {
  constants: {
    url_api: Page.constants.url_api,
    ACCESS_TOKEN_KEY: Page.constants.ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY: Page.constants.REFRESH_TOKEN_KEY,
    ACCESS_TOKEN_EXPIRES_IN: Page.constants.ACCESS_TOKEN_EXPIRES_IN,
    ACCESS_TOKEN_EXPIRES_AT: Page.constants.ACCESS_TOKEN_EXPIRES_AT,
    ORGANIZACION_ID: Page.constants.ORGANIZACION_ID,
    ORGANIZACION_USUARIO_ID: Page.constants.ORGANIZACION_USUARIO_ID,
    MUID: Page.constants.MUID
  },
  methods: {
    checkStatus: function (response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error('HTTP Error ${response.statusText}');
        error.status = response.statusText;
        error.response = response;
        throw error;
      }
    },
    parseJSON: function (response) {
      return response.json();
    },
    error: function (error) {
      if (error.response) {
        return error.response.json();
      }
      return [];
    }
  }
}
