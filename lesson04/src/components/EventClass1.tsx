
import React, { Component } from 'react'

interface IState {
    name: string;
    age: number;
}

export default class EventClass1 extends Component<{},IState> {
  constructor(props:any) {
    super(props);
    this.state = {
        name: "Truong Dien",
        age: 20
    }
  }
  changeState = () => {
    this.setState({
        name: 'Truong Chau Dien',
        age: 30
    });
    alert('Name: '+this.state.name+' - Age: '+this.state.age);
  }
    render() {
    return (
      <div>
        <h2>Welcome to, {this.state.name}; tuổi: {this.state.age}</h2>
        <button className='btn btn-success' onClick={() => this.changeState()}>Change infor</button>
      </div>
    )
  }
}
