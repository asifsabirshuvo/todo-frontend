import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { updateSubtaskStatus } from "../Services/subTaskService";

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

  return (
    <div>
          <ListItem button>
            <Checkbox edge="start" checked={subtaskSingle.status==='pending'?false:true} 
            onClick={handleSubTaskCheck} key = {subtaskSingle.id} id={subtaskSingle.id}
                    tabIndex={-1} disableRipple />
            <ListItemText primary={subtaskSingle.title} />
          </ListItem>
    </div>
  );
}