import React from 'react';
import './App.scss';
import TodoList from './components/ToDoList';
import CompleteList from './components/CompleteList';

const taskCardData = [
  {
      title: "Add Taskcard",
      priority: "1",
      desc: "Add task into to do list",
      complete: false
  },
  {
      title: "Delete Taskcard",
      priority: "2",
      desc: "Remove task from to do list",
      complete: true
  },
  {
    title: "Set Priority",
    priority: "4",
    desc: "Add Priority feature into to do list",
    complete: false
},
]

class App extends React.Component {
   
  state={
    taskCardsToDo :[],
    taskCardsComplete:[]
  };


  componentDidMount() {
    
    const todoCards = taskCardData.filter( task =>{
      return (
        task.complete == false
      )
    });

    const completedCards = taskCardData.filter( task =>{
      return (
        task.complete == true
      )
    });

      this.setState(
        {
          taskCardsToDo: todoCards,
          taskCardsComplete: completedCards
        }
      )

  }


  render(){
    return (
      <div className="app-container">
        <div className="panel-todo">
            <TodoList taskCards = {this.taskCardsToDo} />
        </div>
        <div className="panel-complete">
            <CompleteList taskCards = {this.taskCardsComplete} />
        </div>
      </div>
  );
  }
 
}

export default App;
