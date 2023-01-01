import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

const TodoItem = ({ id, task, isDone, isEdited }) => {

	const dispatch = useDispatch();

	const taskCompleted=()=>{
		dispatch(deleteTask({id: id, task: task , isDone: isDone , isEdited: isEdited }))
	}

	return (
		<li className="task-item">
			<div>
				<button className="remove-task-button" onClick={()=>{
					taskCompleted();
				}}>X</button>
			</div>
			<div>
				{task}
			</div>
			
		</li>
	);
};

export default TodoItem;