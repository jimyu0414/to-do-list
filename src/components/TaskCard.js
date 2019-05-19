import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class TaskCard extends Component{

  handleCardTrash = () =>{
    this.props.removeCard(this.props.id);
  }

  handleCardComplete = () =>{
    this.props.completeCard(this.props.id);
  }

    render(){
    
    /*
      Display proper buttons 
      for completed card and 
      incompleted card
    */
    const button =  this.props.complete ? <CardActions>
    <Button data-testid='testTaskCardDelete'  size="small" color="primary" onClick={this.handleCardTrash}>
      Remove
    </Button>
  </CardActions>  : <CardActions>
    <Button data-testid='testTaskCardComplete' size="small" color="primary" onClick={this.handleCardComplete}>
      Complete
    </Button>
    <Button data-testid='testTaskCardDelete' size="small" color="primary" onClick={this.handleCardTrash}>
      Remove
    </Button>
  </CardActions>

    /* 
      Apply different class to completed card
      and incompleted card
    */
    const cardClass = this.props.complete ? 'task-card__card-completed' : 'task-card__card-incompleted'
  

    return(
    <Card  className={cardClass + " task-card__card"}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            Priority: {this.props.priority}
          </Typography>
          <Typography component="p">
            {this.props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      {button}
    </Card>
        )
    }
}

export default TaskCard;