import ReactDOM from 'react-dom';
import UsersForm from './UsersForm';

const Modal = ({ addUser }) => {
	return ReactDOM.createPortal(
		<div className="modal-background">
			<UsersForm addUser={addUser} />
		</div>,
		document.getElementById('portal')
	);
};

export default Modal;
