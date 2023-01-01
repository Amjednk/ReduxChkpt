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
        }
    }
});

export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;