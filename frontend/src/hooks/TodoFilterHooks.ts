import {useState} from "react";
import {Todo} from "../model/Todo";
import {useTodos} from "./TodoHooks";


export function useOpenTodos() {
    const [openTodos, setOpenTodos] = useState<Todo[]>([])
    setOpenTodos(useTodos().filter(todo => todo.status === "OPEN"));

    return openTodos;
}

export function useProgressTodos() {
    const [progressTodos, setProgressTodos] = useState<Todo[]>([])
    setProgressTodos(useTodos().filter(todo => todo.status === "PROGRESS"));

    return progressTodos;
}

export function useDoneTodos() {
    const [doneTodos, setDoneTodos] = useState<Todo[]>([])
    setDoneTodos(useTodos().filter(todo => todo.status === "DONE"));

    return doneTodos;
}