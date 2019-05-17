import React, {Component} from 'react';
import TaskCardList from './TaskCardList';


class CompleteList extends Component{
    render(){
        return(
            <TaskCardList 
                    cards = {this.props.taskCards}
                />
        )
    }
}

export default CompleteList;