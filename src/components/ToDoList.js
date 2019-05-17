import React, {Component} from 'react';
import ToggleableTaskCardForm from './ToggleableTaskCardForm';
import TaskCardList from './TaskCardList';
class ToDoList extends Component{

    render(){
        return(
            <div>
                <ToggleableTaskCardForm />
                <TaskCardList 
                    cards = {this.props.taskCards}
                />
            </div>
        )
    }
}

export default ToDoList;
