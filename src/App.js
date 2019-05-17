import React from 'react';
import './App.scss';
import TodoList from './components/ToDoList';
import CompleteList from './components/CompleteList';

const taskCardData = [
  {
      title: "Add Taskcard",
      id: 1,
      priority: "1",
      desc: "Add task into to do list",
      complete: false
  },
  {
      title: "Delete Taskcard",
      id: 2,
      priority: "2",
      desc: "Remove task from to do list",
      complete: true
  },
  {
    title: "Set Priority",
    id: 3,
    priority: "4",
    desc: "Add Priority feature into to do list",
    complete: false
},
]

class App extends React.Component {
   
  state={
    taskCardsAll:[],
    taskCardsToDo :[],
    taskCardsComplete:[]
  };


  //Setup UI based on Data
  componentDidMount() {
    
    const todoCards = taskCardData.filter( task =>{
      return (
        task.complete === false
      )
    });

    const completedCards = taskCardData.filter( task =>{
      return (
        task.complete === true
      )
    });

      this.setState(
        {
          taskCardsToDo: todoCards,
          taskCardsComplete: completedCards,
          taskCardsAll: taskCardData
        }
      )

  }

  // removeTask = (taskId) => {
  //   this.setState({
  //     timers: this.state.timers.filter(t => t.id !== timerId),
  //   });
  // }


  render(){
    return (
      <div className="app-container">
        <div className="panel-todo">
            <TodoList taskCards = {this.state.taskCardsToDo} />
        </div>
        <div className="panel-complete">
            <CompleteList taskCards = {this.state.taskCardsComplete} />
        </div>
      </div>
  );
  }
 
}

export default App;
