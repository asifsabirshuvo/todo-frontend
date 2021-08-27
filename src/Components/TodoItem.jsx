import React,{ useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import SubTaskItem from "./SubTaskItem";
import {updateTodoStatus} from './../Services/todoService';
import {createSubtask} from './../Services/subTaskService';
import {useStyles} from './../Styles/customStyle';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function TodoItem({todoSingle}) {
  const [open, setOpen] = React.useState(true);
  const [subtask, setSubtask] = useState('');
  const [todoId, setTodoId] = useState(1);
  const classes = useStyles();
  
  React.useEffect(() => {
		setTodoId (todoSingle.id);
	}, [])
  
  const handleClick = () => {
    setOpen(!open);
  };

  const handleTodoCheck = (e) => {
    e.preventDefault();
    updateTodoStatus(e.target.id,e.target.checked).then(response=>{
      if(response.status){
        window.location.reload();
      }  
    });
  };

  const updateSubTask =  (e) => {
    setSubtask(e.target.value);
};
const generateSubtask = (e)=>{
    createSubtask(subtask,todoId).then(response=>{    
        window.location.reload();
    });
};

  return (
    <div>
      <ListItem button onClick={handleClick} Style="background-color:#f1f1f1;">
        <Checkbox  onClick={handleTodoCheck} key = {todoSingle.id} id={todoSingle.id} edge="edge" checked={todoSingle.status==='pending'?false:true} tabIndex={-1} disableRipple />
        <ListItemText primary={todoSingle.title} />
        <span Style="color:grey;">{calculateCompleted(todoSingle.subtasks)}&nbsp;</span>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        Style="margin-left:4%;margin-top:1%;"
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
        {todoSingle.subtasks.map((item) => {
			return <SubTaskItem subtaskSingle = {item}/>
	    })}
        </List>
        <div Style="display:inline;margin-left:-1%">
        <TextField id="title"
          className={classes.root}
          onChange={updateSubTask}
          Style="width:80%;"
          label="Subtask" variant="outlined" />
        <Button variant="contained" onClick={generateSubtask} color="default" Style="height:53px;width:17%; margin-left:1%">
          ADD SUBTASK
        </Button>
        <br></br><br></br>
        </div>
      </Collapse>
     
    </div>
  );
}

function calculateCompleted(subtasks){
    let completed = 0;
    subtasks.map(sub=>{
        if(sub.status ==='completed'){
          completed++;
        }
    })
    return ''+completed+' of '+subtasks.length + ' completed';
}