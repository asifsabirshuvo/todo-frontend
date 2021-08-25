import React ,{ useState }from "react";
import {getAllTodos} from './../Services/todoService';
import TodoItem from "../Components/TodoItem";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AllTodo() {
	const [todoData, setTodoData] = useState([]);

    React.useEffect(() => {
		getAllTodos().then(response=>{
            setTodoData(response.data);
        });
	}, []);

  
    

    return ( 
	<div Style="width:70%; text-align:center;margin:auto;margin-top:5%;">
        
        <h1>Todo App</h1>
        
        <div Style="display:inline;">
        <TextField id="title"  Style="width:71%;" label="Title" variant="outlined" />
        <Button variant="contained" color="secondary" Style="height:53px;width:27%; margin-left:2%;">
          NEW LIST
        </Button>
        
        </div>
        <br/><br/>
        {todoData.map((item) => {
			return <TodoItem todoSingle = {item}/>;
	    })}
   </div>
    );
}

export default AllTodo;