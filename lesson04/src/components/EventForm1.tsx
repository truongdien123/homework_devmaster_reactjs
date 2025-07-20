
import React, { Component } from 'react'
import IStudent from './IStudent';

export default class EventForm1 extends Component<{}, IStudent> {
  constructor(props:any) {
    super(props);
    this.state = {
        id: 1,
        name: "string",
        age: 0
    }
  }
  handleChange = (event:any) => {
    let name = event.target.name;
    let value = event.target.value;
    const val = (name === 'age' || name === 'id') ? Number(value) : value;
    this.setState(prevState => ({
        ...prevState,
        [name]: val
    }))
  }
  handleSubmit = (event:any) => {
    event.preventDefault();
    alert('Name: '+this.state.name+'\n Age:'+this.state.age)
  }
    render() {
    return (
      <div>
        <div>
            <p>Student Name: {this.state.name}</p>
            <p>Student Age: {this.state.age}</p>
        </div>
        <form action="">
            <div>
                Student Name:
                <input type="text" name="name"/>
            </div>
            <div>
                Student Age:
                <input type="number" name="age"/>
            </div>
            <button onClick={this.handleSubmit}>Update infor</button>
        </form>
      </div>
    )
  }
}
