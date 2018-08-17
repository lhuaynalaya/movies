export const CARGAR_ORGANIZACION = 'SGP/data/organizacion/cargar_organizacion';

export const cargarOrganizacion = (organizacion) => {
  return {
    type: CARGAR_ORGANIZACION,
    organizacion
  };
};
