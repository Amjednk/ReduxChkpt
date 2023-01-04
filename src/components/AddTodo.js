import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import ClearDone from './ClearDone';
import {MdAddTask} from "react-icons/md";



const AddTodo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const addingTask = () => {
		if(value.trim().length !== 0)
		{
			dispatch(
				addTask({task: value})
			);
			setValue("");
		}
	}
	const onSubmit = (event) => {
		event.preventDefault();
		addingTask();
		
	};
	const handleKeyDown = (e)  =>{
		if(e.keyCode === 13) { 
			addingTask();
	}
	};
	return (
		<div>
			<input
				type="text"
				onK
				className="task-input"
				placeholder="New task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onKeyDown = {handleKeyDown}  
			/>
			<MdAddTask className="display-button" onClick={onSubmit}/>
			<ClearDone/> 
		</div>
	);
};

export default AddTodo;