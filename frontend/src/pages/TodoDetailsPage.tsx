import {Todo} from "../model/Todo";
import {useTodo} from "../hooks/TodoHooks";
import {useParams} from "react-router-dom";
import TodoDetailsView from "../components/ToDoDetailsView";


export default function TodoDetailsPage() {
    const params = useParams()
    const id = params.id

    if (id !== undefined) {
        return <div>
            <TodoDetailsView id={id}/>
        </div>
    } else {
        return <div>
            <p>Nothing to show</p>
        </div>
    }
}