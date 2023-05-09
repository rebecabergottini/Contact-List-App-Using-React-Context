const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//guardar todos los estados globales de nuestra app
			listaContactos: [
				{ fullName: "Ada lovelacce", email: "ada123@gmail.com", phone: "234353", address: "plaza españa" },
				{ fullName: "pepe lovelacce", email: "pepe123@gmail.com", phone: "234353", address: "plaza españa" }
			]
		},
		actions: {
			//todas las funciones globales de nuestra app
			agregarContacto: (fullName, email, phone, address) => {
				// getStore().listaContactos.concat({fullName, email, phone, address})
				setStore({ listaContactos: getStore().listaContactos.concat({ fullName, email, phone, address }) });
				// console.log({fullName, email, phone, address});
				console.log(getStore());
			}
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
