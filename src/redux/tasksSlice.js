import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: uuidv4(),
                task: action.payload.task,
                isDone: false,
                isEdited: false,
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            return state.filter((el) => el.id !== action.payload.id);
        },
        Completetodo: (state, action) => {
            state.map((el) => {
            if (el.id === action.payload.id) {
                return (el.isDone = !el.isDone);
            }
            return el.isDone;
            });
        },
        Edittodo: (state, action) => {
            state.map((el) =>
            el.id === action.payload.id ? (el.isEdited = !el.isEdited) : el.isEdited
            );
        },
        Updatetodo: (state, action) => {
            state.map((el) =>
            el.id === action.payload.id ? (el.task = action.payload.task) : el.task
            );
        },
        
        clearDone: (state) => {
            return state.filter((el) => el.isDone === false);
        },
        
    }
});

export const {addTask, deleteTask, Edittodo, Updatetodo, Completetodo, 
    clearDone} = tasksSlice.actions;

export default tasksSlice.reducer;