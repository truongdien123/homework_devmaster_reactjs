
import React, { useState } from 'react'

export default function FunctionComp3() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button className='alert alert-info' onClick={() => setCount(count+1)}>Increase</button>
      <button className='alert alert-warning' onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
