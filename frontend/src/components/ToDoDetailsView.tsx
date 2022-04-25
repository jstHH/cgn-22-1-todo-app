import {useTodo} from "../hooks/TodoHooks";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import TodoDetailsForm from "./TodoDetailsForm";

type TodoDetailsViewProps = {
    id:string;
}

export default function TodoDetailsView ({id}: TodoDetailsViewProps) {
    const todo = useTodo(id);

        return <div>
            <TodoDetailsForm todo={todo}/>
        </div>

}