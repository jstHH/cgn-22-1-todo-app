import {useState} from "react";
import {Todo} from "../model/Todo";
import {addNewTodo} from "../services/TodoApiService";


export default function AddTodoForm() {
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<string>("OPEN")

    function onSubmit() {
        const newTodo:Todo = {description, status}
        addNewTodo(newTodo);
    }

    return <div>
        <form onSubmit={onSubmit}>
            <h3>Add To'Do</h3>
            <label>Description:</label>
            <input type={"text"} required value={description} onChange={(e) => setDescription(e.target.value) }/>
            <label>Status:</label>
            <select required value={status} onChange={(e)  => setStatus(e.target.value)}>
                <option value={"OPEN"}>Open</option>
                <option value={"PROGRESS"}>In Progress</option>
                <option value={"DONE"}>Done</option>
            </select>
            <button type={"submit"}>Add</button>
        </form>
    </div>
}