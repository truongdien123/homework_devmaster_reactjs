import React from "react";

export default function JsxExpression() {
  const name = "Devmaster";
  const user = {
    name: "Truong Dien",
    age: 46
  };
  // function
  const formatName = (user: any) => {
    return user.name + ': '+user.age
  }
  // element
  const element = (
    <div className="alert alert-danger">
        <h2>Xin chào, {name}</h2>
        <h3>Welcome, {formatName(user)}</h3>
    </div>
  )
  // function rest parameter
  const sum = (...nums:number[]): number => {
    return nums.reduce((sum, num) => sum + num,0);
  }
  return (
    <div>
      <h2>Jsx Expression</h2>
      <hr />
      <p>Xin chao {name}</p>
      <p>Họ tên: {user.name} - Tuổi của bạn: {user.age}</p>
      <p>Gọi hàm: {formatName(user)}</p>
      {element}
      <hr />
      <p>Kết quả: {sum(1,3,5)}</p>
    </div>
  );
}
