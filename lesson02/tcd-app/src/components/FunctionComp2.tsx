
import React from 'react'

type Props = {
    address: string;
    birthday: string;
}

export default function FunctionComp2({address, birthday}: Props) {
  return (
    <div>
      <h2>Function Component demo</h2>
      <hr />
      <p>My address: {address}</p>
      <p>My birthday: {birthday}</p>
    </div>
  )
}
