import { CARGAR_ORGANIZACION } from './actions';

export const organizacion = (state = {}, action) => {
  switch (action.type) {
    case CARGAR_ORGANIZACION:
      return action.organizacion;
    default:
      return state;
  }
};
