import React, { useReducer, useState } from 'react';
import Todo from './Todo';
import './App.css';

export const ACTIONS = {
	ADD_TODO: 'add-todo',
	TOGGLE_TODO: 'toggle-todo',
	DELETE_TODO: 'delete-todo',
};

const reducer = (todos, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return [...todos, newTodo(action.payload.name)];
		case ACTIONS.TOGGLE_TODO:
			return todos.map(todo => {
				if (todo.id === action.payload.id) {
					return { ...todo, isCompleted: !todo.isCompleted };
				}
				return todo;
			});
		case ACTIONS.DELETE_TODO:
			return todos.filter(todo => todo.id !== action.payload.id);
		default:
			return todos;
	}
};

const newTodo = name => {
	return {
		id: Date.now(),
		name: name,
		isCompleted: false,
	};
};

const App = () => {
	const [todos, dispatch] = useReducer(reducer, []);
	const [name, setName] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
		setName('');
	};

	console.log(todos);
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
				className='p-4 m-6 border-2 rounded shadow'
			/>
			{todos.map(todo => {
				return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
			})}
		</form>
	);
};

export default App;
