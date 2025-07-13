
import React from 'react'

export default function FunctionComp4() {
    const fruits = ["Apple", "Banana", "Orange"];
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}
