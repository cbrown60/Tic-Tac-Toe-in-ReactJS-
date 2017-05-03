import React from 'react'
import Layout from '../components/Layout'

class BoardContainer extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    squares:['','','','','','','','',''],
    player: 'player 1'
  }

}

setClickedBox(index){

  this.setState((prevState) => {

    if(prevState.squares[index-1] === ''){

      if (prevState.player === 'player 1'){
        prevState.squares[index - 1] = "x"
        prevState.player = "player 2"
      } else {
        prevState.squares[index - 1] = "o"
        prevState.player = "player 1"
      }
    }
    return prevState
  })

}




  render(){
    return(
        <div className = 'container'>
        <h1>X & O </h1>
          <Layout squares={this.state.squares} clickHandler={this.setClickedBox.bind(this)}/>

        </div>
      )
  }


}


export default BoardContainer