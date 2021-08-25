import React ,{ useState }from "react";
import {getAllTodos} from './../Services/todoService';
import TodoItem from "../Components/TodoItem";
function AllTodo() {
	const [todoData, setTodoData] = useState([]);

    React.useEffect(() => {
		getAllTodos().then(response=>{
            setTodoData(response.data);
        });
	}, []);

  
    

    return ( 
	<div>
        {todoData.map((item) => {
			return <TodoItem todoSingle = {item}/>;
	    })}
   </div>
    );
}

export default AllTodo;