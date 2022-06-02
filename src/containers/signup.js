import React, { useState } from "react";

export default function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();



  function handleSubmit() {
    console.log(name, email, password);
    localStorage.setItem(email, password)
  }

  return (
    <div>
      <div className="loginForm">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
            className="formItem"
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="formItem"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="formItem"
          />
          <input type="submit"
            value="SignUp"
            className="formItem"
        />
        </form>
      </div>
    </div>
  );
}
