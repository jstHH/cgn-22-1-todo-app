import {Todo} from "../model/Todo";
import TodoCard from "./TodoCard";

type TodoListProps = {
    todos: Todo[];
}

export default function TodoList({todos}: TodoListProps) {
    return <div>
        {todos.map(task => <TodoCard todo={task}/>)}
    </div>
}