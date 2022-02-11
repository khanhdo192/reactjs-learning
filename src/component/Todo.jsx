import React, { useReducer, useRef } from 'react';

// 1. init state
const initState = {
    job: '',
    jobs: []
}
// 2. action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}
// 3. reducer
const reducer = (state, action) => {
    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action')
    }
}

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state

    const inputRef = useRef()
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }

    return (
        <div style={{paddingLeft: '20px'}}>
            <h3>Todo App with useReducer</h3>
            <input 
                ref={inputRef}
                value={job}
                placeholder="Enter job"
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job} 
                        <span style={{cursor: 'pointer', paddingLeft: '5px'}} onClick={() => dispatch(deleteJob(index))}>x</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;