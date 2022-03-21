import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const UsersList = ({ users, deleteUser, selectUser, userEdit }) => {
	return (
		<div className="container userlist wrapper">
			<div className="row">
				<div className="model-card">
					{users.map(user => (
						<div
							className="card card-body d-flex flex-row justify-content-between p-4 pt-3 pb-3 shadow rounded"
							key={user.id}
						>
							<div>
								<h4 className="mt-2 mb-4">
									{user.first_name} {user.last_name}
								</h4>
								<p>{user.email}</p>
								<p>F.Nac: {user.birthday}</p>
							</div>
							<div className="d-flex justify-content-end align-items-end gap-3">
								<button
									disabled={userEdit}
									className="text-danger display-7"
									onClick={() => deleteUser(user.id)}
								>
									<FaTrash />
								</button>
								<button
									disabled={userEdit}
									className="text-primary display-8"
									onClick={() => selectUser(user)}
								>
									<FaEdit />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default UsersList;
