import React from 'react'
import "../styles/form.css"
import {useDispatch} from "react-redux"
import { useState, useEffect } from 'react';
import { createUser } from '../../userSlice';
import Loading from './Loading';
function Form({isVisible, onClose}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  const dispatch = useDispatch();

  const checkEmailExists = async (email) => {
    try {
      const response = await fetch(`/api/check-email?email=${email}`);
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  useEffect(()=>{
      // setName();
      // setEmail();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", {
        name,
        email,
    });
    if(
        name &&
        email
    ) {
      setLoading(true);
      const emailExists = await checkEmailExists(email);

      if(emailExists) {
        setLoading(false);
        setError("Email already exists. Please use a different email.");
        return;
      }

      setError("");

      dispatch(createUser({
            name,
            email
        }));
      setLoading(false);
      setName("");
      setEmail("");
      onClose();
    }
};
  return (
    <div className={`form-overlay ${isVisible ? 'show' : ''}`}>
    <div className="form-container animated fadeInDown">
      {loading ? (
        <Loading />
      ) : (
        <>
        <p>Here's a form that will update you whenever I am releasing a game</p>
        {error && (
          <div>
            {console.log("Error message:", error)}
            <p className='error-message'>{error}</p>
          </div>
        )}
      <form className='create_user_form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
        type="text" 
        id="name" 
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
        autoComplete='off'
        />

        <label htmlFor="email">Email:</label>
        <input 
        type="email" 
        id="email" 
        name="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
        autoComplete='off'
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
        </>
      )}
    </div>
  </div>
  )
}

export default Form;