import React from 'react';



const DeleteSmurf = (props) => {
    const id = props.match.params.id;

    setTimeout( () => {
        props.deleteSmurf(id)
    }, 2000);

    return(
        <div>
            <p>Gargamel is eating your smurf</p>
            <img alt="gargamel" src="https://vignette.wikia.nocookie.net/smurfsfanon/images/d/d3/Gargamel_AHS_Profile_Update.jpg/revision/latest/scale-to-width-down/250?cb=20170424144555" />
        </div>
    )
}

export default DeleteSmurf

