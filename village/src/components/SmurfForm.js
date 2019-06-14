import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();

    if(this.state.name === '' || this.state.age === '' || this.state.height === ''){

    }else{

      this.props.addSmurf(this.state)
  
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }
    // add code to create the smurf using the api
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <Link to={"/"} >Home</Link>
        <form onSubmit={this.addSmurf} className="add-form">
          <div className="form-container">
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
          </div>

          <div className="form-container">
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
          </div>

          <div className="form-container">
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
          </div>
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
