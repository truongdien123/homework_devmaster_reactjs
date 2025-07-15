import React from "react";
import Student from "./Student";

interface Student {
  id: number;
  name: string;
  age: number;
}

interface StudentListProps {
  students: Student[];
}

export default function StudentList({ students }: StudentListProps) {
  const elementStudent = students.map((student, index) => {
    return <Student student={student} key={index} />;
  });
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{elementStudent}</tbody>
    </table>
  );
}
