
import React, { Component } from 'react'
import { IStudent } from './components/IStudent';
import ListStudent from './components/ListStudent';
import AddStudent from './components/AddStudent';

interface AppState {
  students: IStudent[];
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
    students: [
  {
    id: 1,
    name: "Nguyen Van A",
    age: 20,
    gender: "Male",
    address: "123 Le Loi, District 1, Ho Chi Minh City",
    email: "nguyenvana@example.com",
    phone: "0901234567",
    state: "active",
  },
  {
    id: 2,
    name: "Tran Thi B",
    age: 22,
    gender: "Female",
    address: "456 Nguyen Trai, District 5, Ho Chi Minh City",
    email: "tranthib@example.com",
    phone: "0912345678",
    state: "inactive",
  },
  {
    id: 3,
    name: "Le Van C",
    age: 19,
    gender: "Male",
    address: "789 Hai Ba Trung, District 3, Ho Chi Minh City",
    email: "levanc@example.com",
    phone: "0923456789",
    state: "active",
  },
  {
    id: 4,
    name: "Pham Thi D",
    age: 21,
    gender: "Female",
    address: "101 Tran Hung Dao, District 1, Ho Chi Minh City",
    email: "phamthid@example.com",
    phone: "0934567890",
    state: "suspended",
  },
  {
    id: 5,
    name: "Hoang Van E",
    age: 23,
    gender: "Male",
    address: "55 Cach Mang Thang 8, District 10, Ho Chi Minh City",
    email: "hoangvane@example.com",
    phone: "0945678901",
    state: "active",
  },
]
}
  
  handleAdd = (student: Omit<IStudent, 'id'>) => {
    this.setState((prevState) => {
      const newId = prevState.students.length > 0 ? Math.max(...prevState.students.map(s => s.id)) + 1 : 1;
      const newStudent: IStudent = {
        id: newId,
        ...student
      };
      return {
        students: [...prevState.students, newStudent]
      }
    })
  }
  render() {
    return (
      <div className='container h-100'>
        <AddStudent onAdd={this.handleAdd}/>
        <ListStudent students={this.state.students}/>
      </div>
    )
  }
}
