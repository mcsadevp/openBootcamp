import React from 'react'


function PartComponent(props) {
  return (
    <div>
        <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}



export default PartComponent
