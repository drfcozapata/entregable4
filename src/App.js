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

	const getUsers = () => {
		axios
			.get('https://users-crud1.herokuapp.com/users/')
			.then(res => setUsers(res.data));
	};

	useEffect(() => {
		getUsers();
	}, []);

	const addUser = user => {
		axios
			.post('https://users-crud1.herokuapp.com/users/', user)
			.then(() => getUsers());
	};

	const deleteUser = id => {
		axios
			.delete(`https://users-crud1.herokuapp.com/users/${id}`)
			.then(() => getUsers());
	};

	return (
		<div className="App">
			<Header />
			<UsersList users={users} deleteUser={deleteUser} />
			<Footer />
			{!!openModal && <Modal addUser={addUser} />}
			<CreateUserButton setOpenModal={setOpenModal} />
		</div>
	);
}

export default App;
