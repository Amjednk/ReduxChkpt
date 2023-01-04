import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask, Completetodo, Edittodo } from "../redux/tasksSlice";
import UpdateForm from "./UpdateForm";
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai';

const TodoItem = ({ id, task, isDone, isEdited }) => {

	const dispatch = useDispatch();

	const taskDone = () => {
        dispatch(Completetodo({id: id, task: task , isDone: isDone , isEdited: isEdited }))
    }

	const taskCompleted=()=>{
		dispatch(deleteTask({id: id, task: task , isDone: isDone , isEdited: isEdited }))
	}

	const editHandler = () => {
		dispatch(Edittodo({id: id, task: task , isDone: isDone , isEdited: isEdited }));
	};
	

	return (
		<li className="task-item">
			<div>
			{isEdited && <UpdateForm todotask={task} todoid={id}/>}
			<AiOutlineDelete className="remove-task-button" onClick={()=>{
				taskCompleted();
			}}/>
			<AiFillEdit  className="edit-button" onClick={editHandler}/>
			
			</div>
			<div id={id} value={task} onClick={taskDone} className={isDone ? "todo done" : "todo"}>
				{task}
			</div>
			
		</li>
	);
};

export default TodoItem;