import React from 'react'

export default function FacultyLogin() {
  return (
    <div>
            <div className="container login">
        <h2>
          Faculty Portal Login
        </h2>
        <hr/>
        <form>
  <div class="mb-3">
    <label for="studentUsername" class="form-label">Username</label>
    <input type="username" class="form-control" id="studentUsername" aria-describedby="studentUsername"/>
  </div>
  <div class="mb-3">
    <label for="studentPassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="studentPassword"/>
  </div>
  
  <button type="submit" class="btn submit">Submit</button>
</form>
      </div>
    </div>
  )
}
