import React from 'react'

export default function Admission() {
  return (
    <div>
      <form type='submit' method='post' action='/Registration'>
  <div className="container registration mb-3 registration">
    <h2>Registration Form<hr/></h2>
    <label for="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="Name"/>
    <label for="Age" className="form-label">Age</label>
    <input type="number" className="form-control" id="Age"/>
    <label for="Gender" className="form-label">Gender :</label>
    <input type="text" className="form-control" id="Gender"/>
    <label for="Qualification" className="form-label"> Highest Qualification</label>
    <input type="text" className="form-control" id="Qualification"/>
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  <button type="submit" className="btn btn-info submit">Submit</button>
  </div>
  </form>
  </div>
  )
}