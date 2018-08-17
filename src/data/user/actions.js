// Tipos de acciones
export const CARGAR_USUARIO = 'SGP/data/user/cargar_usuario';
export const CARGAR_PERMISOS = 'SGP/data/user/cargar_permisos';


// Creadores de acción
export const cargarUsuario = (usuario) => {
  return {
    type: CARGAR_USUARIO,
    usuario
  };
};

export const cargarPermisos = (permisos) => {
  return {
    type: CARGAR_PERMISOS,
    permisos
  };
};
