import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { ModalEdit } from "../component/ModalEdit.js";
import { Context } from "../store/appContext.js";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});
	const [edit, setEdit] = useState({
		showModal: false,
		id: undefined
	});

	// El useEffect funciona como un onload y ejecuta el codigo que tiene dentro apenas se carga el componente.
	useEffect(() => {
		actions.obtenerContactos();
	}, []);

	console.log(store.listaContactos);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.listaContactos.map(item => (
							<ContactCard
								fullName={item.full_name}
								email={item.email}
								phone={item.phone}
								address={item.address}
								key={item.id}
								id={item.id}
								onDelete={() => setState({ showModal: true, id: item.id })}
								edit={() => setEdit({ showModal: true, id: item.id })}
							/>
						))}
						{/* <ContactCard />
						<ContactCard />
						<ContactCard /> */}
					</ul>
				</div>
			</div>
			<Modal id={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
			<ModalEdit id={edit.id} show={edit.showModal} onClose={() => setEdit({ showModal: false })} />
		</div>
	);
};
