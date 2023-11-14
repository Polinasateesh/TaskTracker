import React, { useReducer, useEffect, useState } from 'react';
import { Card ,TextField,Button} from '@mui/material';
import axios from 'axios';
import './TaskForm.css';

const TaskForm = ({ dispatch }) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { id: Date.now(), title: taskName, completed: false };
        dispatch({ type: 'ADD_TASK', payload: newTask });
        setTaskName('');

        axios.post('https://jsonplaceholder.typicode.com/todos', newTask);
    };

    return (
        <Card className='card-container'>
            <form onSubmit={handleSubmit} className='card-content'>
                <TextField
                    type="text"
                    label="Enter Task..."
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    sx={{width:'50%'}}
                    size='large'

                />
                <Button type="submit" variant="contained">+ Add Task</Button>
            </form>

        </Card>

    );
};
export default TaskForm