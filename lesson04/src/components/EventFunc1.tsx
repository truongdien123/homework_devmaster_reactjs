
import React from 'react'

export default function EventFunc1() {
  const eventHandleClick2 = (content:string) => {
    alert(content)
  }
    return (
    <div>
      <button onClick={() => eventHandleClick2("Devmaster")}>Click here</button>
    </div>
  )
}
