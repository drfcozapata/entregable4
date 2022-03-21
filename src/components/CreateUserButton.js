import React from 'react';

const CreateUserButton = ({ setOpenModal }) => {
	const onClickButton = () => {
		setOpenModal(openModal => !openModal);
	};

	return (
		<div className="container text-center">
			<button className="create-user-button" onClick={onClickButton}>
				+
			</button>
		</div>
	);
};

export default CreateUserButton;
