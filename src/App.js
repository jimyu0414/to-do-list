import React from 'react';
import './App.scss';
import TodoList from './components/ToDoList';
import CompleteList from './components/CompleteList';

/*
  Define initial task data
*/
const taskCardData = [
  {
      title: "Task 001 Add task",
      id: 1,
      priority: "1",
      desc: "Add task into to do list",
      complete: false
  },
  {
      title: "Task 002 Taskcard",
      id: 2,
      priority: "2",
      desc: "Remove task from to do list",
      complete: true
  },
  {
    title: "Task 003 Set Priority",
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
    function submit new task card
  */
  handleTaskSubmit = (task) =>{
    delete task.isOpen;
    const allTaskCards = this.state.taskCardsAll.concat(task);
    this.filterTasks(allTaskCards);
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

  /*
    function refresh UI
  */
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
        <div className="app-header">
        <label>
          <p>Sort Options</p>
          <select onChange={this.handleCardOrder}>
            <option value="1">Priority</option>
            <option value="2">Name</option>
          </select>
        </label>
        </div>
        <div className="panel-todo">
            <TodoList 
            taskCards = {this.state.taskCardsToDo} 
            removeTask = {this.handleTaskRemove}
            completeTask = {this.handleTaskComplete}
            submitTask = {this.handleTaskSubmit}
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
