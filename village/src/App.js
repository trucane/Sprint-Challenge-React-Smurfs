import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import DeleteSmurf from './components/DeleteSmurf'
import Smurfs from './components/Smurfs';
import Home from './components/Home';
//import Smurf from './components/Smurf';
//import { homedir } from 'os';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }


  componentDidMount(){
    axios.get("http://localhost:3333/smurfs")
      .then(response =>{
        this.setState({smurfs:response.data})
      })
      .catch(err =>{
        console.log(err)
      })
  }

  addSmurf = (data) =>{
    axios.post("http://localhost:3333/smurfs", data)
    .then(response =>{
      this.setState({smurfs:response.data});
      this.props.history.push('/smurfs')

    })
    .catch(err => {console.log(err)})
  }

  deleteSmurf = (e, id) =>{
    e.preventDefault();
    console.log(id)
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response =>{
        this.setState({smurfs:response.data})
      })
      .catch(err =>{console.log(err)})
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path="/delete-smurf/:id"  render={props => <DeleteSmurf {...props} deleteSmurf={this.deleteSmurf}/>} />
        <Route path="/add-smurf"  render={props => <SmurfForm {...props} addSmurf={this.addSmurf}/>} />
        <Route path="/smurfs"  render={props => <Smurfs {...props} smurfs={this.state.smurfs} addSmurf={this.addSmurf} deleteSmurf={this.deleteSmurf}/>} />
        <Route exact path="/"  component={Home} />
      </div>
    );
  }
}

export default App;
