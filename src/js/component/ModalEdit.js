import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ModalEdit = props => {
	const [edit, setEdit] = useState({
		//initialize state here
	});
	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const { actions } = useContext(Context);

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Edit Contact</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<form>
						<div className="modal-body">
							<input
								type="text"
								name="name"
								placeholder="Name"
								value={fullName}
								onChange={e => setFullName(e.target.value)}></input>
							<input
								type="text"
								name="phone"
								placeholder="phone"
								value={phone}
								onChange={e => setPhone(e.target.value)}></input>
							<input
								type="text"
								name="adress"
								placeholder="address"
								value={address}
								onChange={e => setAddress(e.target.value)}></input>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">
								Oh no!
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								onClick={() => {
									actions.editarContactos(props.id);
								}}>
								Do it!
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
ModalEdit.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalEdit.defaultProps = {
	show: false,
	onClose: null
};
