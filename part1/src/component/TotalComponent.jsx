import React from 'react'


function TotalComponent(props) {

    return (
        <div>
            <p>Number of exercises 
            {props.exercises1 +
            props.exercises2 +
            props.exercises3}
            </p>
        </div>
    )
}


export default TotalComponent
