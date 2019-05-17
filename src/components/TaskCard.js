import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class TaskCard extends Component{

    remove = () ={
        this.props.removeCard(this.props.id);
    }

    render(){
    
    /*Display proper buttons 
    for completed card and 
    none completed card*/
    const button =  this.props.complete ? <CardActions>
    <Button size="small" color="primary" onClick={this.remove}>
      Remove
    </Button>
  </CardActions>  : <CardActions>
    <Button size="small" color="primary">
      Complete
    </Button>
    <Button size="small" color="primary" onClick={this.remove}>
      Remove
    </Button>
  </CardActions>
  

    return(
    <Card className="task-card__card">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography gutterBottom variant="h8" component="h3">
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