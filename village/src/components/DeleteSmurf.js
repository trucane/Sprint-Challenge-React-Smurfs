import React from 'react';



export default class  DeleteSmurf extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.match.params.id)
        return(
            <div>
                Hello
               
            </div>
        )
    }
}
