
import React from 'react'
import { IStudent } from './IStudent'

interface StudentProps {
    students: IStudent[];
}

export default function ListStudent({students}: StudentProps) {
  return (
    <div>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th>State</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
                {students.map((student, index) => {
                    return (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>{student.address}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.state}</td>
                            <td>View/Edit/Delete</td>
                        </tr>
                    )
                })}
            </tbody>
      </table>
    </div>
  )
}
