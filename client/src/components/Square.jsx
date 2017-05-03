import React from 'react'

const Square = (props) => {
  

    return(
      <div className ='square'>
        {props.value} 
        <div className='square-content'>
        {props.squareNumber}
          </div>

      </div>
      )
  
}

export default Square