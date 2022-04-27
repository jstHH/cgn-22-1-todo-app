import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";
import {getAllTodos, getTodo} from "../services/TodoApiService";


export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        getAllTodos()
            .then(body => setTodos(body))
    }, [])

    return todos;
}

export function useTodo(id:string) {
    const [todo, setTodo] = useState<Todo>({description: "", id: "", status: ""})

    useEffect(() => {
        getTodo(id)
            .then(body => setTodo(body))
    },)

    return todo;
}