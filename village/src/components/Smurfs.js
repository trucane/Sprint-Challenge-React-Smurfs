import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SmurfContainer from './SmurfContainer';


import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurfs Village</h1>
        <Link to={"/"} className="nav-item">Home</Link>
        <Link to={"/add-smurf"}  className="nav-item">Add A Smurf</Link>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <SmurfContainer key={smurf.id} smurf={smurf}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
