import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const uuidv4 = require('uuid/v4');

class ToggleableTaskCardForm extends Component {
    state = {
        isOpen : false,
        id: '',
        title:'',
        priority: 1,
        desc:'',
        complete: false
    };

    handleTitleChange = (e) => {
      this.setState(
        {
          title: e.target.value
        }
      )
    }

    handleDescChange = (e) => {
      this.setState(
        {
          desc: e.target.value
        }
      )
    }

    handlePriorityChange  = (e) => {
        this.setState(
            { priority: e.target.value }
            );
      };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    }

    handleFormClose = () => {
        this.setState({ isOpen: false });
    }

    handleFromSubmit = () => {
      this.setState({
         isOpen: false,
         id : uuidv4()
        });
      this.props.submitCard(this.state);  
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
                onChange={this.handleTitleChange}
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
          onChange={this.handleDescChange}
        />

      <CardActions className="task-card__toggle--btn-container">
        <Button size="small" color="primary" onClick={this.handleFormClose}>
          Cancel
        </Button>
        <Button size="small" color="primary" onClick={this.handleFromSubmit}>
          Save
        </Button>
      </CardActions>
    </Card>

            );
        } else {
            
            return(
              <div className="task-card__toggle-icon">
               <div id="" className="cross-icon" onClick={this.handleFormOpen}></div>
              </div>
            );

        }
    }
}

export default ToggleableTaskCardForm;


