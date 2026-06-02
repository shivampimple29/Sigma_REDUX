import {useState} from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddForm(){
    const [task,SetTask]=useState("");
    const dispatch=useDispatch();

    const SubmitHandler=(event)=>{
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    };
    return(
        <form onSubmit={SubmitHandler}>
            <input type="text" onChange={(e)=>SetTask(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}

export default AddForm;