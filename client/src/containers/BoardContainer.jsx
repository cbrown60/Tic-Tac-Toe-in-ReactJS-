import React from 'react'
import Layout from '../components/Layout'

class BoardContainer extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    squares:['','','','','','','','','']
  
  }

}

  render(){
    return(
        <div className = 'container'>
        <h1>X & O </h1>
          <Layout squares={this.state.squares}/>

        </div>
      )
  }


}


export default BoardContainer