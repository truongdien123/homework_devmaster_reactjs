import React from "react";
import IEmployee from "./IEmployee";

interface EmployeeProps {
  employee: IEmployee;
}

export default function Employee({ employee }: EmployeeProps) {
  return (
    <tr>
      <td>{employee.empId}</td>
      <td>{employee.empName}</td>
      <td>{employee.empSalary}</td>
      <td>{employee.empStatus}</td>
      <td>
        <button className="btn btn-info">View</button>
        <button className="btn btn-success ms-2 me-2">Edit</button>
        <button className="btn btn-danger">Remove</button>
      </td>
    </tr>
  );
}
