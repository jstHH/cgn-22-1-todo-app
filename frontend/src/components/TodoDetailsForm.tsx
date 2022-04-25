import {Todo} from "../model/Todo";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

type todoDetailsFormProps = {
    todo: Todo
}

export default function TodoDetailsForm({todo}: todoDetailsFormProps) {

    const [description, setDescription] = useState<string>(todo.description)
    const [status, setStatus] = useState<string>(todo.status)

    const navigate = useNavigate()

    function onBackButtonClick() {
        navigate("/");
    }

    return <div>
        <form>
            <div>
                <label>Description:</label>
                <input type={"text"} required value={description} onChange={(e) => setDescription(e.target.value) }/>
            </div>
            <div>
                <label>Status:</label>
                <select required value={status} onChange={(e)  => setStatus(e.target.value)}>
                    <option value={"OPEN"}>Open</option>
                    <option value={"PROGRESS"}>In Progress</option>
                    <option value={"DONE"}>Done</option>
                </select>
            </div>
        </form>
        <button onClick={onBackButtonClick}>Back</button>
    </div>
}