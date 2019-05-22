import React from 'react';
import './App.scss';
import TodoList from './components/ToDoList';
import CompleteList from './components/CompleteList';
import {getTaskData} from './Data.js';

/*
  Define initial task data
*/
const taskCardData = getTaskData();

class App extends React.Component {
   
  state={
    taskCardsToDo :[],
    taskCardsComplete:[],
    taskCardsAll:[],
    totalToDoTasks: 0,
    totalCompletedTasks: 0,
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
    this.filterTasks(this.state.taskCardsAll.filter(t => t.id !== taskId))
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
    Sort task cards
  */
  handlesSortCardOrder = (e) => {
    var name = e.target.value;
    if(name ==='name'){
      this.setState(
        {
        taskCardsToDo: this.state.taskCardsToDo.sort(function (a, b) {
            return ('' + a.title).localeCompare(b.title);
        }),
        taskCardsComplete: this.state.taskCardsComplete.sort(function (a, b) {
          return ('' + a.title).localeCompare(b.title);
      }),
        }
      )
    }else if (name==='priority'){
      this.setState(
        {
          taskCardsToDo: this.state.taskCardsToDo.sort(function (a, b) {
            return (b.priority - a.priority);
        }),
        taskCardsComplete: this.state.taskCardsComplete.sort(function (a, b) {
          return (b.priority - a.priority);
      })
        }
      )
    }
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

   

    const toDoTasks = todoCards.length;
    const completeTasks = completedCards.length;

    this.setState(
      {
        taskCardsToDo: todoCards,
        taskCardsComplete: completedCards,
        taskCardsAll: allTaskCards,
        totalToDoTasks: toDoTasks,
        totalCompletedTasks: completeTasks
      }
    )
  }

  render(){
    return (
      <div>
      <div className="app-header">
          <div><label>
          <p>Task Card Sort Options</p>
          <select onChange={this.handlesSortCardOrder}>
            <option >Sort</option>
            <option value="priority">Priority</option>
            <option value="name">Name</option>
          </select>
        </label></div>
          <div>
            <p>Total To-do tasks:</p>
            <p>{this.state.totalToDoTasks}</p>
          </div>
          <div>
            <p>Total Completed tasks:</p>
            <p>{this.state.totalCompletedTasks}</p>
          </div>
        </div>
      <div className="app-container">
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
      </div>
  );
  }
 
}

export default App;
