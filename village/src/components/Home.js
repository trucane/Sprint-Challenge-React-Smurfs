import React from 'react';
import {Link} from 'react-router-dom';



const Home = () => {
    return (
        <div>
        <h1>Come See the Smurfs</h1>
        <Link to={"/smurfs"} >Smurfs Village</Link>
        <Link to={"/add-smurf"} >Add Smurf</Link>
        </div>
    )
}


export default Home