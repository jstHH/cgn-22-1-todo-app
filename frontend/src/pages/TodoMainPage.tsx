import Header from "../components/Header";
import {useTodos} from "../hooks/TodoHooks";
import TodoList from "../components/TodoList";


export default function TodoMainPage() {
    const todos = useTodos();

    return <div>
        <Header/>
        <TodoList todos={todos}/>
    </div>
}