import React, {Component} from 'react';
import TaskCard from './TaskCard';

class TaskCardList extends Component {

    render(){
        const cardList = this.props.cards.map( card => {
            return(<TaskCard 
                key={card.id}
                id={card.id}
                title={card.title}
                priority={card.priority}
                desc={card.desc}
                complete={card.complete} 
                removeCard={this.props.removeCard}
                completeCard={this.props.completeCard}
            />)
        })
        return(
            <div className="task-card-list">
                {cardList}
            </div>
        )
    }
}

export default TaskCardList;