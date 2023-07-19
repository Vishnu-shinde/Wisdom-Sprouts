import React, { Component } from 'react'

export default class Design extends Component {
  constructor() {
    super ()
      this.state={
        count:0
      }
  }

  render(){
    return(
        <>
            <h2>count:{this.state.count}</h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Click here</button>
        </>
    )
  }
}
