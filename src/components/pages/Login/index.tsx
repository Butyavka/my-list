import React from 'react'
import auth from '../../../store/auth'

const Login = () => {

  return (
    <div>
      <div>
        Log in with Google account
      </div>
      <button onClick={ auth.login }>
        Log in
      </button>
    </div>
  )
}

export default Login