import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTaskReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //Adding tasks
    addTasks: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove tasks
    removeTasks: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update tasks
    updateTasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            item: action.payload.item,
          };
        }
        return task;
      });
    },
    //completed
    completeTasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      });
    },
  },
});

export const { addTasks, removeTasks, updateTasks, completeTasks } =
  addTaskReducer.actions;
export const reducer = addTaskReducer.reducer;
