import {
  CARGAR_ORGANIZACIONES,
  AGREGAR_ORGANIZACION
} from './actions';

export const organizaciones = (state = [], action) => {
  switch (action.type) {
    case CARGAR_ORGANIZACIONES:
      return action.organizaciones;
    case AGREGAR_ORGANIZACION:
      return [
        ...state,
        action.organizacion
      ];
    default:
      return state;
  }
};
