import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";


const AddTodo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length !== 0)
		{
			dispatch(
				addTask({task: value})
			);
			setValue("");
		}
	};
	return (
		<div>
			<input
				type="text"
				className="task-input"
				placeholder="New task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>

			<button className="add-button" onClick={onSubmit}>
				Add
			</button>
		</div>
	);
};

export default AddTodo;