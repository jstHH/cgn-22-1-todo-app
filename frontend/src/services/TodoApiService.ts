import axios from "axios";
import {Todo} from "../model/Todo";


export function getTodo(id:string) {
    return axios.get("/api/todo/" + id)
        .then(response => response.data)
        .catch(console.error)
}

export function getAllTodos() {
    return axios.get("/api/todo")
        .then(response => response.data)
        .catch(console.error)
}

export function addNewTodo(newTodo: Todo) {
    axios.post("/api/todo", newTodo)
        .catch(console.error)
}

export function updateTodo(id:string, updateTodo:Todo) {
    axios.put("/api/todo/" + id, updateTodo)
        .catch(console.error)
}

export function deleteTodo(id:string) {
    axios.delete("/api/todo/" + id)
        .catch(console.error)
}
