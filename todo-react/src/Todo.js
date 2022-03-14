import { ACTIONS } from './App';
const Todo = ({ todo, dispatch }) => {
	return (
		<div className='p-4 m-2'>
			<span style={{ color: todo.complete ? '#aaa' : '#000' }}>
				{todo.name}
			</span>
			<button
				onClick={() =>
					dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
				}
				className='p-4 m-2 bg-gray-200 rounded shadow'
			>
				Toggle
			</button>
			<button
				onClick={() =>
					dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
				}
				className='p-4 m-2 bg-gray-200 rounded shadow'
			>
				Delete
			</button>
		</div>
	);
};

export default Todo;
