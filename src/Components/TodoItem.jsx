import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import SubTaskItem from "./SubTaskItem";
import {updateTodoStatus} from './../Services/todoService';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function TodoItem({todoSingle}) {
  const [open, setOpen] = React.useState(true);

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

  return (
    <div>
      <ListItem button onClick={handleClick} Style="background-color:#f1f1f1;">
        <Checkbox  onClick={handleTodoCheck} key = {todoSingle.id} id={todoSingle.id} edge="edge" checked={todoSingle.status==='pending'?false:true} tabIndex={-1} disableRipple />
        <ListItemText primary={todoSingle.title} />
        <span Style="color:grey;">{calculateCompleted(todoSingle.subtasks)}&nbsp;</span>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        Style="margin-left:20px;"
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
        {todoSingle.subtasks.map((item) => {
			return <SubTaskItem subtaskSingle = {item}/>
	    })}
        </List>
      </Collapse>
    </div>
  );
}

function calculateCompleted(subtasks){
    let completed = 0;
    subtasks.map(sub=>{
        if(sub.status ==='completed')
        completed++;
    })
    return ''+completed+' of '+subtasks.length + ' completed';
}