export const CARGAR_ORGANIZACIONES = 'SGP/data/organizaciones/cargar_organizaciones';
export const AGREGAR_ORGANIZACION = 'SGP/data/organizaciones/agregar_organizacion';

// Creadores de acciones
export const cargarOrganizaciones = (organizaciones) => {
  return {
    type: CARGAR_ORGANIZACIONES,
    organizaciones
  };
};


export const agregarOrganizacion = (organizacion) => {
  return {
    type: AGREGAR_ORGANIZACION,
    organizacion
  };
};
