import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  //Declarationg of email and password
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate(); //hook to handle navigation

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Navigate to the main page
    navigate("/mainpage");
  };
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="">
          <h1>Admin Login</h1>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="form-button" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default Loginpage;
