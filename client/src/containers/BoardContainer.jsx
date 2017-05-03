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
     // console.log("box clicked wih index value = ", index) 
     console.log(index) 
    // this.setState((prevState) => {
    //   if (prevState.player === 'player 1'){
    //     prevState.squares[index] = 'x'
    //     return {squares: , player: 'player 2'}
    //   }
    //   return {}
    //    })
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