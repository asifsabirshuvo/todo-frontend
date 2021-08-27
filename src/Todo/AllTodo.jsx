import React ,{ useState }from "react";
import Skeleton from "react-loading-skeleton";
import { makeStyles } from "@material-ui/core/styles";
import {getAllTodos, createTodo} from './../Services/todoService';
import TodoItem from "../Components/TodoItem";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "grey"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "red"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "red"
      },
      "& .MuiOutlinedInput-input": {
        color: "black"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "black"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "black"
      },
      "& .MuiInputLabel-outlined": {
        color: "black"
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "black"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "black"
      }
    }
  });

function AllTodo() {
	const [todoData, setTodoData] = useState([]);
	const [loader, setLoader] = useState(true);
    const [title, setTitle] = useState('');
    const classes = useStyles();
    React.useEffect(() => {
		getAllTodos().then(response=>{
            setLoader(true);
            if(response.success){
                setTodoData(response.data);
            }
            setLoader(false);
        });
	}, []);

    const updateTodoTitle =  (e) => {
        setTitle(e.target.value);
    };
    const generateTodo = (e)=>{
		createTodo(title).then(response=>{
            setLoader(true);
            if(response.success){
                setTodoData(response.data);
            }
            setLoader(false);
            window.location.reload();
        });
    };
    

    return ( 
	<div Style="width:70%; text-align:center;margin:auto;margin-top:5%;">
        
        <h1>Todo App</h1>
        
        <div Style="display:inline;">
        <TextField id="title"
          className={classes.root}
          onChange={updateTodoTitle}
          Style="width:71%;"
          label="Title" variant="outlined" />
        <Button variant="contained" onClick={generateTodo} color="secondary" Style="height:53px;width:27%; margin-left:2%;">
          NEW LIST
        </Button>
        
        </div>
        <br/><br/>
        {loader? (
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
        ):
        todoData.length?
            (<div>        
                {todoData.map((item) => {
                return <TodoItem todoSingle = {item}/>;
            })}</div>
            ):
        (<h1 Style="color:grey;"><br></br>You have no todo/backend is offline</h1>)
        
    }
   </div>
    );
}

export default AllTodo;