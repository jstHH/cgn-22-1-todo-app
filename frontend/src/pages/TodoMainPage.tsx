import Header from "../components/Header";
import {useTodos} from "../hooks/TodoHooks";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";
import TodoGalery from "../components/TodoGalery";


export default function TodoMainPage() {

    return <div>
        <Header/>
        <AddTodoForm/>
        <TodoGalery/>
    </div>
}