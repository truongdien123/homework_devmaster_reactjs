import React from 'react';
import logo from './logo.svg';
import './App.css';
import JsxExpression from './components/JsxExpression';
import FunctionComp from './components/FunctionComp';
import FunctionComp1 from './components/FunctionComp1';
import FunctionComp2 from './components/FunctionComp2';
import FunctionComp3 from './components/FunctionComp3';
import FunctionComp4 from './components/FunctionComp4';

function App() {
  return (
    <div className='container h-100'>
      <div>
        <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster Academy" />
      </div>
      <div className='text-center alert alert-info'>
        <h1>VIỆN CÔNG NGHỆ VÀ ĐÀO TẠO DEVMASTER</h1>
      </div>
      <hr />
      <JsxExpression/>
      <hr />
      <h2 className='alert alert-success'>Component</h2>
      <FunctionComp name="Truong Dien" company="Devmaster Academy"/>
      <FunctionComp1 name='Truong Chau Dien' company='Cong ty Devmaster'/>
      <FunctionComp2 address={'Quy Nhon'} birthday={'07/08/2004'} />
      <hr />
      <FunctionComp3/>
      <hr />
      <FunctionComp4/>
    </div>
  );
}

export default App;
