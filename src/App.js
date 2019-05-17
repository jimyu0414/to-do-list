import React from 'react';
import './App.scss';
import TodoList from './components/ToDoList';
import CompleteList from './components/CompleteList';

/*
  Define initial task data
*/
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
    taskCardsToDo :[],
    taskCardsComplete:[],
    taskCardsAll:[]
  };

  /*
    Setup to da task cards
    and compeleted cards
    based on Data
  */
  componentDidMount() {
    
    this.filterTasks(taskCardData);

  }

  /*
    function remove task card
  */
  handleTaskRemove = (taskId) => {
    this.setState({
      taskCardsToDo: this.state.taskCardsToDo.filter(t => t.id !== taskId),
      taskCardsComplete: this.state.taskCardsComplete.filter(t => t.id !== taskId),
      taskCardsAll: this.state.taskCardsAll.filter(t => t.id !== taskId),
    });
  }

  /*
    function complete task card
  */
  handleTaskComplete = (taskId) => {
    const allTaskCards = this.state.taskCardsAll.map( task =>{

        if(task.id === taskId){
          task.complete = true;
        }

        return(task)

    })

    this.filterTasks(allTaskCards)
  }

  filterTasks = (allTaskCards) => {
    const todoCards = allTaskCards.filter( task =>{
      return (
        task.complete === false
      )
    });

    const completedCards = allTaskCards.filter( task =>{
      return (
        task.complete === true
      )
    });

    this.setState(
      {
        taskCardsToDo: todoCards,
        taskCardsComplete: completedCards,
        taskCardsAll: allTaskCards,
      }
    )
  }

  render(){
    return (
      <div className="app-container">
        <div className="panel-todo">
            <TodoList 
            taskCards = {this.state.taskCardsToDo} 
            removeTask = {this.handleTaskRemove}
            completeTask = {this.handleTaskComplete}
            />
        </div>
        <div className="panel-complete">
            <CompleteList 
            taskCards = {this.state.taskCardsComplete} 
            removeTask = {this.handleTaskRemove}
            completeTask = {this.handleTaskComplete}
            />
        </div>
      </div>
  );
  }
 
}

export default App;
