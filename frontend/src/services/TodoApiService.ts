import axios from "axios";


export function getAllTodos() {
    return axios.get("/api/todo")
        .then(response => response.data)
        .catch(console.error)
}