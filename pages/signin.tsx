import React from 'react'
import AuthForm from '../lib/authForm'

const signin = () => {
  return <AuthForm mode={"signin"} />
}
signin.authPage = true;
export default signin