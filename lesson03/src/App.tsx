import React from 'react';
import logo from './logo.svg';
import './App.css';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';
import ClassComp1 from './components/ClassComp1';
import ClassComp2 from './components/ClassComp2';
import FuncComp3 from './components/FuncComp3';
import FuncListMember from './components/FuncListMember';
import ClassMember from './components/ClassMember';
import StudentList from './components/StudentList';

function App() {
  const objStudent = {
    name: 'Chau Dien',
    age: 100,
    email: 'truongdien@gmail.com'
  }

  interface Student {
    id: number;
    name: string;
    age: number;
  }

  const students: Student[] = [
    {id: 1, name: 'Nguyen Van A', age: 20},
    {id: 2, name: 'Tran Thi B', age: 22},
    {id: 3, name: 'Le Van C', age: 19},
    {id: 4, name: 'Pham Thi D', age: 21},
    {id: 5, name: 'Hoang Van E', age: 23}
  ]

  return (
    <div className='container h-100'>
      <FuncComp fullName='Truong Chau Dien' age='46' email='dien@gmail.com'/>
      <hr />
      <ClassComp studentName='Truong Dien'/>
      <ClassComp1 name='Dien' age={10}/>
      <ClassComp2 student={objStudent}/>
      <FuncComp3 student={objStudent}/>
      <FuncListMember/>
      <ClassMember/>
      <hr />
      <StudentList students={students}/>
    </div>
  );
}

export default App;
