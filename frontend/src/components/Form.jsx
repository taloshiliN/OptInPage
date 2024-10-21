import React from 'react'
import "../styles/form.css"
function Form({onClose}) {
  return (
    <div className="form-overlay">
    <div className="form-container">
      <h2>Access Form</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  </div>
  )
}

export default Form