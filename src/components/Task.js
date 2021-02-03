import React, {Component} from "react";

import "./Task.css"

class Task extends Component {
    render() {
        const {task} = this.props;
     return (
         <li className="red">
            <p>
             {task.title} - {task.description} - {task.done} - {task.id}
            </p>
            <input type="checkbox" />
            <button> x </button>
         </li>
     )
           
    }
}

export default Task;