import React from 'react';
import logo from './logo.svg';
import './App.css';
import IEmployee from './components/IEmployee';
import EmployeeList from './components/EmployeeList';

function App() {
  const employee: IEmployee[] = [
    {empId: 1, empName: "Nguyễn Văn A", empSalary: 1000, empStatus: "still-working"},
    {empId: 2, empName: "Trần Thị B", empSalary: 2000, empStatus: "stop-working"},
    {empId: 3, empName: "Lê Văn C", empSalary: 3000, empStatus: "still-working"},
    {empId: 4, empName: "Phạm Thị D", empSalary: 4000, empStatus: "stop-working"},
    {empId: 5, empName: "Hoàng Văn E", empSalary: 5000, empStatus: "still-working"}
  ]
  return (
    <div className='container h-100'>
      <EmployeeList employees={employee}/>
    </div>
  );
}

export default App;
