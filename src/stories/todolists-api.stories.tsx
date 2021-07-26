import React, {useEffect, useState} from 'react'
import {taskApi, todolistApi} from "../api/todolist-api";


export default {
    title: 'API'
}



export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodos()
            .then((res) => {
                setState(res.data);
            })

    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'Some new todolist'
        todolistApi.createTodo(title)
            .then((res) => {
                setState(res.data);
            })
            .catch((error) => {
                alert('error - cannot create todolist')
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "a2cb7246-b3a1-4109-9ec3-508e55afaa74"
        todolistApi.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data);
            })

    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'f93effd1-4a52-4d6a-be1a-05c2168f6a89'

        todolistApi.updateTodoTitle(todolistId, 'Todolist with changed title')
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div> {JSON.stringify(state)}</div>
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//1860f784-f9f5-4b8c-a914-95d3d381f49b     - 3 tasks
//86b6e14e-b206-43f4-8fb6-00051063e662     - 3 tasks
//f93effd1-4a52-4d6a-be1a-05c2168f6a89     - 3 tasks


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'f93effd1-4a52-4d6a-be1a-05c2168f6a89';
        taskApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data);
            })
            .catch(() => {
            alert('error in GetTasks')
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'f93effd1-4a52-4d6a-be1a-05c2168f6a89'
        const title = 'New task title'
        taskApi.createTask(todolistId, title)
            .then((res) => {
                setState(res.data);
            })
            .catch(() => {
                alert('error in CreateTask')
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'f93effd1-4a52-4d6a-be1a-05c2168f6a89'
        const taskId = '996953a7-fa55-433d-a5e5-e13bda2c99bf'
        taskApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data);
            })
            .catch(() => {
            alert('error in DeleteTask')
        })

    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'f93effd1-4a52-4d6a-be1a-05c2168f6a89'
        const taskId = '93df94b1-8190-4720-b9f4-b3095fb7d39f'
        taskApi.updateTaskTitle(todolistId, taskId, 'Some new task title ')
            .then((res) => {
                setState(res.data)
            })
            .catch(() => {
            alert('error in UpdateTaskTitle')
        })

    }, [])
    return <div> {JSON.stringify(state)}</div>
}



