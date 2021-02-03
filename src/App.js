import React from "react";
import './App.css';

import tasks from "./sample/task.json";

import Tasks from "./components/Tasks" 

class App extends React.Component {
  state = {
    tasks: tasks
  }

  render() {
    return (
      <div>
        <ul>
          <Tasks tasks={this.state.tasks}/>
        </ul>
      </div>
    )
  }
}
 
export default App;
