import React, {Component} from 'react';
import TaskCard from './TaskCard';
import ToggleableTaskCardForm from './ToggleableTaskCardForm';

class ToDoList extends Component{
    state = {
    taskcards: [],
  };

    render(){
        return(
            <div>
                <ToggleableTaskCardForm />
                <TaskCardList 
                    cards = {this.props.taskcards}
                />
            </div>
        )
    }
}

export default ToDoList;

class TaskCardList extends Component{
    render(){
        return(
            <span>1</span>
        );
    }
}