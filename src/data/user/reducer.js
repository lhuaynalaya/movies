import {
  CARGAR_USUARIO,
  CARGAR_TOKEN,
  CARGAR_REFRESH_TOKEN,
  CARGAR_TOKEN_EXPIRES_IN,
  CARGAR_TOKEN_EXPIRES_AT,
  CARGAR_PERMISOS
} from './actions';


export const user = (state = {}, action) => {
  switch (action.type) {
    case CARGAR_USUARIO:
      return {
        ...state,
        ...action.usuario
      }
    case CARGAR_PERMISOS:
      return {
        ...state,
        permisos: action.permisos
      }
    default:
      return state;
  }
};
