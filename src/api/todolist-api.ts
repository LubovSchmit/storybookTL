import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'api-key': 'b7564040-cba9-47e4-b65c-6f0fc575eba8'
    }

})

export type CommonResponseTaskType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export type TasksType = {
    description: string;
    title: string;
    completed: boolean;
    status: string;
    priority: string;
    startDate: any;
    deadline: any;
    id: string;
    todoListId: string;
    order: number;
    addedDate: string;
}

export type GetTaskResponseWithQueryType = {
    items: Array<TasksType>,
    totalCount: number,
    error: string
}


export const taskApi = {
    getTasks(todolistId: string) {

        return instance.get<GetTaskResponseWithQueryType>(`/todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post<CommonResponseTaskType<{ item: TasksType }>>(`/todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<CommonResponseTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTaskTitle(todolistId: string, taskId: string, title: string) {
        return instance.put<CommonResponseTaskType<{ item: TasksType }>>(`/todo-lists/${todolistId}/tasks/${taskId}`, {title})
    }
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export type CommonResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}


export type TodoType = {
    id: string;
    title: string;
    addedDate: string;
    order: number;
}



export const todolistApi = {
    getTodos() {
        return instance.get<Array<TodoType>>('todo-lists')
    },
    createTodo(title: string) {
        return instance.post<CommonResponseType<{ item: TodoType }>>('todo-lists', {title})
    },
    deleteTodo(todoId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todoId}`)
    },
    updateTodoTitle(todoId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todoId}`, {title})
    }
}


