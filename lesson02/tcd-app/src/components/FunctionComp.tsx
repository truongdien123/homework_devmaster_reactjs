
import React from 'react'

export default function FunctionComp(prop:any) {
  return (
    <div>
      <h2>Function component demo</h2>
      <hr />
      <p>My name is {prop.name}</p>
      <p>Company: {prop.company}</p>
    </div>
  )
}
