
import React from 'react'
import FuncMember from './FuncMember'

export default function FuncListMember() {
  return (
    <div className='border p-2'>
      <h2>Danh sách thành viên</h2>
      <FuncMember name='Dien 1' age='20'/>
      <FuncMember name='Dien 2' age='30'/>
      <FuncMember name='Dien 3' age='40'/>
      <FuncMember name='Dien 4' age='50'/>
      <FuncMember name='Dien 5' age='60'/>
    </div>
  )
}
