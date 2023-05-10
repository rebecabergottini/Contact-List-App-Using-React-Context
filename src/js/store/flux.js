const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//guardar todos los estados globales de nuestra app
			listaContactos: []
		},
		actions: {
			//todas las funciones globales de nuestra app
			agregarContacto: (fullName, email, phone, address) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: fullName,
						email: email,
						agenda_slug: "rebecabergo",
						address: address,
						phone: phone
					})
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log(err));
			},

			// Solicitud GET (Request).
			obtenerContactos: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/rebecabergo")
					.then(response => response.json())
					.then(data => setStore({ listaContactos: data }))
					.catch(err => console.log("Solicitud fallida", err));
			},

			actualizarContactos: (id, fullName, email, phone, address) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify({
						full_name: fullName,
						email: email,
						agenda_slug: "rebecabergo",
						address: address,
						phone: phone
					})
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log(err));
			},

			onDelete: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log(err));
			}
		}
	};
};

export default getState;
