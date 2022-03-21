import React, { useEffect, useState } from 'react';

const UsersForm = ({ addUser, userEdit, cancelEdit, updateUser }) => {
	const [first_name, setFirst_name] = useState('');
	const [last_name, setLast_name] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [birthday, setBirthday] = useState('');

	useEffect(() => {
		if (userEdit) {
			setFirst_name(userEdit.first_name);
			setLast_name(userEdit.last_name);
			setPassword(userEdit.password);
			setEmail(userEdit.email);
			setBirthday(userEdit.birthday);
		} else {
			setFirst_name('');
			setLast_name('');
			setPassword('');
			setEmail('');
			setBirthday('');
		}
	}, [userEdit]);

	const handleSubmit = e => {
		e.preventDefault();

		const newUser = { first_name, last_name, password, email, birthday };
		if (userEdit) {
			newUser.id = userEdit.id;
			updateUser(newUser);
		} else {
			addUser(newUser);
		}

		setFirst_name('');
		setLast_name('');
		setPassword('');
		setEmail('');
		setBirthday('');
	};

	return (
		<div className="container userform d-flex flex-column align-items-center">
			<h2>{userEdit ? 'Editar Usuario' : 'Agregar Usuario'}</h2>
			<form
				className="col-6 form-group card card-body p-4 mt-3"
				onSubmit={handleSubmit}
			>
				<div className="d-flex justify-content-between mb-3">
					<>
						<label htmlFor="first_name" />
						<input
							type="text"
							className="form-control"
							placeholder="Primer nombre"
							id="first_name"
							value={first_name}
							onChange={e => setFirst_name(e.target.value)}
						/>
					</>
					<>
						<label htmlFor="last_name" />
						<input
							type="text"
							className="form-control ml-2"
							placeholder="Apellido"
							id="last_name"
							value={last_name}
							onChange={e => setLast_name(e.target.value)}
						/>
					</>
				</div>
				<label htmlFor="email" />
				<input
					type="email"
					className="form-control mb-3"
					placeholder="Correo"
					id="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<label htmlFor="password" />
				<input
					type="password"
					className="form-control mb-3"
					placeholder="Contraseña"
					id="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<label htmlFor="birthday" />
				<input
					type="date"
					className="form-control mb-5"
					placeholder="Fecha de nacimiento"
					id="birthday"
					value={birthday}
					onChange={e => setBirthday(e.target.value)}
				/>
				<div className="d-flex justify-content-around">
					<button className="btn btn-outline-primary w-45" type="submit">
						{userEdit ? 'Actualizar' : 'Agregar'}
					</button>
					{userEdit && (
						<button className="btn btn-warning w-45" onClick={cancelEdit}>
							Cancelar
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default UsersForm;
