import React, {Component} from 'react';
import ToggleableTaskCardForm from './ToggleableTaskCardForm';
import TaskCardList from './TaskCardList';

class ToDoList extends Component{

    render(){
        return(
            <div>
                <ToggleableTaskCardForm 
                  submitCard = {this.props.submitTask}
                />
                <TaskCardList 
                    cards = {this.props.taskCards}
                    removeCard = {this.props.removeTask}
                    completeCard = {this.props.completeTask}
                />
            </div>
        )
    }
}

export default ToDoList;
