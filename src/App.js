import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CreateUserButton from './components/CreateUserButton';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import UsersList from './components/UsersList';

function App() {
	const [users, setUsers] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [userEdit, setUserEdit] = useState(false);

	const getUsers = () => {
		axios
			.get('https://users-crud1.herokuapp.com/users/')
			.then(res => setUsers(res.data));
	};

	useEffect(() => {
		getUsers();
	}, []);

	const addUser = user => {
		axios.post('https://users-crud1.herokuapp.com/users/', user).then(() => {
			getUsers();
			setOpenModal(false);
		});
	};

	const deleteUser = id => {
		axios
			.delete(`https://users-crud1.herokuapp.com/users/${id}`)
			.then(() => getUsers());
	};

	const selectUser = user => {
		axios.get(`https://users-crud1.herokuapp.com/users/${user.id}`).then(() => {
			console.log(user);
			setUserEdit(user);
			setOpenModal(true);
		});
	};

	const cancelEdit = () => {
		setUserEdit(false);
		setOpenModal(false);
	};

	const updateUser = user => {
		axios
			.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, user)
			.then(() => {
				setUserEdit(false);
				setOpenModal(false);
				getUsers();
			});
	};

	return (
		<div className="App">
			<Header />
			<h2 className="app-title text-center text-uppercase">Usuarios</h2>
			<UsersList
				users={users}
				deleteUser={deleteUser}
				selectUser={selectUser}
				userEdit={userEdit}
			/>
			<Footer />
			{!!openModal && (
				<Modal
					addUser={addUser}
					userEdit={userEdit}
					cancelEdit={cancelEdit}
					updateUser={updateUser}
				/>
			)}
			<CreateUserButton setOpenModal={setOpenModal} />
		</div>
	);
}

export default App;
