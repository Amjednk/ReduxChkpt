import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Edittodo, Updatetodo } from "../redux/tasksSlice";
import {RxUpdate} from 'react-icons/rx'

function UpdateForm({ todotask, todoid}) {
let dispatch = useDispatch();
const [newTask, setNewTask] = useState("");

const handleChange = (e) => {
    setNewTask(e.target.value);
};
const updateHandler = (e) => {
    e.preventDefault();
    dispatch(Updatetodo({ id: todoid, task: newTask }));
    dispatch(Edittodo(todoid));
};


return (
    <div>
    <form>
        <input defaultValue={todotask} onChange={handleChange} />
        <RxUpdate className="update-button" onClick={updateHandler}/>
    </form>
    </div>
);
}
export default UpdateForm;