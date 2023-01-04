import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap-dark.min.css';


const App = () => {
	return (
		<div className="app">
			<h1 className="h1">My To Do App</h1>
			<AddTodo />
			<TodoList />
		</div>
	);
};

export default App;