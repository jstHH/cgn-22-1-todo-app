import TodoList from "./TodoList";
import {useTodos} from "../hooks/TodoHooks";
import "./TodoGalery.css"


export default function TodoGalery() {
    const todos = useTodos();

return <div className={"galeryContainer"}>
    <div>
        <h3>Open</h3>
        <TodoList todos={todos.filter(todo => todo.status === "OPEN")} />
    </div>
    <div>
        <h3>In Progress</h3>
        <TodoList todos={todos.filter(todo => todo.status === "PROGRESS")}/>
    </div>
    <div>
        <h3>Done</h3>
        <TodoList todos={todos.filter(todo => todo.status === "DONE")}/>
    </div>
</div>
}