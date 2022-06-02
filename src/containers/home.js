import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState();
  const [lName, setLname] = useState();
  const [email, setEmail] = useState();

  function handleSubmit() {
    document.getElementById("forms").reset();
    const span = document.createElement("span");
    span.innerHTML = `${name} ${lName}, email : ${email}`;
    document.getElementById("users").appendChild(span);
    
  }

  return (
    <div>
      <div className="loginForm">
        <form className="form" id="forms">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            required
            onChange={(e) => setName(e.target.value)}
            className="formItem"
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            required
            onChange={(e) => setLname(e.target.value)}
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
          <button onClick={handleSubmit} type="button">Add</button>
        </form>
      </div>
      <div>
        <h2>Users</h2>
        <div id="users" className="users"></div>
      </div>
    </div>
  );
}
