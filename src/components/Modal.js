import ReactDOM from 'react-dom';
import UsersForm from './UsersForm';

const Modal = ({ addUser, userEdit, cancelEdit, updateUser }) => {
	return ReactDOM.createPortal(
		<div className="modal-background">
			<UsersForm
				addUser={addUser}
				userEdit={userEdit}
				cancelEdit={cancelEdit}
				updateUser={updateUser}
			/>
		</div>,
		document.getElementById('portal')
	);
};

export default Modal;
