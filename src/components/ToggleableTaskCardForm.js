import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';




class ToggleableTaskCardForm extends Component {
    state = {
        isOpen : false,
        priority: 1,
    };

    handlePriorityChange  = (event) => {
        this.setState(
            { priority: event.target.value }
            );
      };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    }

    handleFormClose = () => {
        this.setState({ isOpen: false });
    }

    handleFormSubmit = () => {

    }

    render(){
        if (this.state.isOpen){
            return (           
                
    <Card className='task-card__toggle'>
      <TextField
                id="standard-name"
                label="Task Name"
                value={this.state.name}                
                margin="normal"
              />

        <label>
          <p>Set Task Priority:</p>
          <select value={this.state.priority} onChange={this.handlePriorityChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>

    <TextField
         className="task-input-area"
          id="outlined-textarea"
          label="Task Details"
          placeholder="Placeholder"
          multiline
          margin="normal"
          variant="outlined"
        />

      <CardActions className="task-card__toggle--btn-container">
        <Button size="small" color="primary" onClick={this.handleFormClose}>
          Cancel
        </Button>
        <Button size="small" color="primary">
          Save
        </Button>
      </CardActions>
    </Card>

            );
        } else {
            
            return(
               <div id="" className="cross-icon" onClick={this.handleFormOpen}></div>
            );

        }
    }
}

export default ToggleableTaskCardForm;


