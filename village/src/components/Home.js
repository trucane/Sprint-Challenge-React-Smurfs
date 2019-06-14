import React from 'react';
import {Link} from 'react-router-dom';



const Home = () => {
    return (
        <div className="header">
            <h1>Come See the Smurfs</h1>
            <Link to={"/smurfs"}  className="nav-item">Smurfs Village</Link>
            <Link to={"/add-smurf"}  className="nav-item">Add Smurf</Link>
        </div>
    )
}


export default Home