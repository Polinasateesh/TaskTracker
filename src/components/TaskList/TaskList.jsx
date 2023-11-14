import React, { useReducer, useEffect, useState } from 'react';
import { Card, IconButton, Checkbox, CircularProgress,Box ,Tooltip} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './TaskList.css'
const TaskList = ({ tasks, dispatch }) => {
    return (
        <Card>
            <ul>
                {tasks.length === 0 ? <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center' }}>
                    <CircularProgress />
                </Box> : tasks.map((task) => (
                    <li key={task.id} className='list' >
                        <div className='list-container'>
                            <div>
                                <Checkbox
                                    checked={task.completed}
                                    onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                                />
                                <span>{task.title}</span>

                            </div>

                            <IconButton onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>
                            <Tooltip title='Delete'><DeleteIcon className='delete-icon' fontSize='medium' /></Tooltip>
                            </IconButton>
                        </div>

                        <hr />
                    </li>

                ))}
            </ul>

        </Card>

    );
};

export default TaskList