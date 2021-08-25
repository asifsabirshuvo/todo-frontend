import React ,{ useState }from "react";
import Skeleton from "react-loading-skeleton";
import {getAllTodos} from './../Services/todoService';
import TodoItem from "../Components/TodoItem";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AllTodo() {
	const [todoData, setTodoData] = useState([]);
	const [loader, setLoader] = useState(true);

    React.useEffect(() => {
		getAllTodos().then(response=>{
            setLoader(true);
            setTodoData(response.data);
            setLoader(false);
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
        {loader === false ? (<div>        
            {todoData.map((item) => {
			return <TodoItem todoSingle = {item}/>;
	    })}</div>
        ):(
            <div>
					<Skeleton Style="width:100%;" height={50}/>
					<br></br>
					<Skeleton Style="width:100%;" height={50}/>
					<br></br>
					<Skeleton Style="width:100%;" height={50}/>
					<br></br>
					<Skeleton Style="width:100%;" height={50}/>
					<br></br>
			</div>
        )
        
    }
   </div>
    );
}

export default AllTodo;