import React, {Component} from 'react';
import TaskCardList from './TaskCardList';


class CompleteList extends Component{
    render(){
        return(
            <TaskCardList 
             cards = {this.props.taskCards}
             removeCard = {this.props.removeTask}
             completeCard = {this.props.completeTask}
            />
        )
    }
}

export default CompleteList;