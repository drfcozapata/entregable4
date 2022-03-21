import React, { useState } from 'react';

const UsersForm = ({ addUser }) => {
	const [first_name, setFirst_name] = useState('');
	const [last_name, setLast_name] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [birthday, setBirthday] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		const newUser = { first_name, last_name, password, email, birthday };
		addUser(newUser);

		setFirst_name('');
		setLast_name('');
		setPassword('');
		setEmail('');
		setBirthday('');
	};

	return (
		<div className="container userform d-flex flex-column align-items-center">
			<h2>Agregar Usuario</h2>
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
				<label htmlFor="password" />
				<input
					type="password"
					className="form-control mb-3"
					placeholder="Contraseña"
					id="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<label htmlFor="email" />
				<input
					type="email"
					className="form-control mb-3"
					placeholder="Correo"
					id="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
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
				<button className="btn btn-outline-primary w-45" type="submit">
					Agregar
				</button>
			</form>
		</div>
	);
};

export default UsersForm;
