import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import './App.css'
import { BsFillClipboardCheckFill } from 'react-icons/bs';




const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] };
    case 'TOGGLE_TASK':
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case 'DELETE_TASK':
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'SET_TASKS':
      return { tasks: action.payload };
    default:
      return state;
  }
};




const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      dispatch({ type: 'SET_TASKS', payload: response.data });
    });
  }, []);

  useEffect(() => {
    axios.put('https://jsonplaceholder.typicode.com/todos', state.tasks);
  }, [state.tasks]);

  return (

     <div className='main-container'>
      <h1 className='main-heading'><BsFillClipboardCheckFill/>Task Tracker</h1>
      <TaskForm dispatch={dispatch} />
      <TaskList tasks={state.tasks} dispatch={dispatch} />

    </div>
 
   
  );
};

export default App;

