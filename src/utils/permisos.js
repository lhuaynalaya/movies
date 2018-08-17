export default {
  tienePermiso: function(propspermisos, entidad, nombre_permiso, mas_permisos = false) {
		let permisos = propspermisos.filter((permiso) => {
			return permiso.entidad === entidad;
		});

		if (permisos && permisos.length > 0) {
			let permiso = permisos[0];
			if (mas_permisos) {
				let mas = permiso.mas_permisos.filter((item) => {
					return item.nombre === nombre_permiso;
				});

				if (mas && mas.length > 0) {
					return mas[0].esta_habilitado;
				}
			} else {
				return permiso[nombre_permiso];
			}
		}
		return false;
	}
}
