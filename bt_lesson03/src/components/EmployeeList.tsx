
import React from 'react'
import IEmployee from './IEmployee'
import Employee from './Employee'

interface EmployeeListProps {
  employees: IEmployee[]
}

export default function EmployeeList({employees}: EmployeeListProps) {
  const elementEmployee = employees.map((employee, index) => {
    return <Employee employee={employee} key={index}/>
  })
  return (
    <div>
      <table className='table table-bordered mt-3'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {elementEmployee}
        </tbody>
      </table>
    </div>
  )
}
