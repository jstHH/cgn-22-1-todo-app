import {Todo} from "../model/Todo";
import {deleteTodo, updateTodo} from "../services/TodoApiService";
import {useNavigate} from "react-router-dom";

type TodoCardProps = {
    todo:Todo;
}

export default function TodoCard({todo}: TodoCardProps) {
    const navigate = useNavigate();

    function ShowButton() {
        if (todo.status === "OPEN") {
            return <button onClick={startProgress}>Start Progress</button>
        } else if (todo.status === "PROGRESS") {
            return <button onClick={finishProgress}>Finish</button>
        } else {
           return <button onClick={removeTodo}>Delete</button>
        }
    }

    function startProgress (){
        todo.status = "PROGRESS";
        updateTodo(todo.id, todo);
        window.location.reload()
    }

    function finishProgress (){
        todo.status = "DONE";
        updateTodo(todo.id, todo);
        window.location.reload()
    }

    function removeTodo () {
        deleteTodo(todo.id);
        window.location.reload()
    }

    function onCardClick() {
        navigate(`/${todo.id}`)
    }

    return <div onClick={onCardClick}>
        <p>{todo.description}</p>
        <p>{todo.status}</p>
        <ShowButton/>
    </div>
}

