import React from 'react'
import './SignIn.css'
function SignIn() {
  return (
    <div className='signInContainer'>
        <div className='formDiv'>
          <form className="px-4 py-3">
          <div className="mb-3">
             <label for="exampleDropdownFormEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
         </div>
         <div className="mb-3">
      <label for="exampleDropdownFormPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
        <label className="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>

    <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        <div className="dropdown-divider"></div>
         <a className="dropdown-item" href="..">New around here? Sign up</a>
          <a className="dropdown-item" href="..">Forgot password?</a>
    </div>
    </div>
  )
}

export default SignIn