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
            />)
        })
        return(
            <div class="task-card-list">
                {cardList}
            </div>
        )
    }
}

export default TaskCardList;