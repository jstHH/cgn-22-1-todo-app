import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";
import {getAllTodos} from "../services/TodoApiService";


export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        getAllTodos()
            .then(body => setTodos(body))
    }, [])

    return todos;
}