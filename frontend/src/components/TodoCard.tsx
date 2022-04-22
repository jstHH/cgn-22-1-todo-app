import {Todo} from "../model/Todo";

type TodoCardProps = {
    todo:Todo;
}

export default function TodoCard({todo}: TodoCardProps) {
    return <div>
        <h2>{todo.id}</h2>
        <p>{todo.description}</p>
        <p>{todo.status}</p>
    </div>
}