import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { updateSubtaskStatus } from "../Services/subTaskService";

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

const handleSubTaskCheck = (e) => {
  e.preventDefault();
  updateSubtaskStatus(e.target.id,e.target.checked).then(response=>{
    if(response.status){
      console.log('now go to load');
      window.location.reload();
    }  
  });
};

export default function SubTaskItem({subtaskSingle}) {
  const classes = useStyles();

  return (
    <div>
          <ListItem button className={classes.nested}>
            <Checkbox edge="start" checked={subtaskSingle.status==='pending'?false:true} 
            onClick={handleSubTaskCheck} key = {subtaskSingle.id} id={subtaskSingle.id}
                    tabIndex={-1} disableRipple />
            <ListItemText primary={subtaskSingle.title} />
          </ListItem>
    </div>
  );
}