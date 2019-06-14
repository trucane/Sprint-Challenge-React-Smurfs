import React from 'react';
import {Link} from 'react-router-dom';

export default class Smurf extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    const id = this.props.match.params.id;

    const smurf = this.props.smurfs.find(item => `${item.id }` === id);
    return (

      <div>Hello</div>

      // <div className="Smurf">
      //   <h3>{smurf.name}</h3>
      //   <strong>{smurf.height} tall</strong>
      //   <p>{smurf.age} smurf years old</p>
      //   <Link to={`/delete-smurf/${smurf.id}`}> Delete {smurf.name} </Link>
      // </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};


