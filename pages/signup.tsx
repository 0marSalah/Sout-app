import React from 'react'
import AuthForm from '../lib/authForm'

const signup = () => {
  return <AuthForm mode={"signup"} />
}

signup.authPage = true;

export default signup