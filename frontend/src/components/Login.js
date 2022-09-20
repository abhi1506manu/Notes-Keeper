import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'

function Login({setIsLogin}) {
  const [user, setUser] = useState({
    name: " ", email: " ", password: " "
  })

  const [err, setErr] = useState('')

  const onChangeInput = e =>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})
    setErr('')
  } 
//fetching register user 
  const registerSubmit = async e =>{
    e.preventDefault()
    try {
      const res = await axios.post('/user/register',{
        username:user.name,
        email:user.email,
        password:user.password
      })
      setUser({name:" ",email:" ", password:" "})
      setErr(res.data.msg)
      
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg)
    }
  }

  //login
  const loginSubmit = async e =>{
    e.preventDefault()
    try {
      const res = await axios.post('/user/login',{
        email: user.email,
        password: user.password
      })
      setUser({name:" ",email:" ", password:" "})
      localStorage.setItem('tokenStore',res.data.token)
      setIsLogin(true)
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg)
    }
  }

  return (

    <section>
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={loginSubmit}>
          <input type="email" name='email' id='login-email' placeholder='Email'
           required value={user.email} onChange={onChangeInput} />

          <input type="password" name="password" placeholder="Password" id="login-password"
           required value={user.password} autoComplete="true" onChange={onChangeInput} />

          <button type='submit'>Login</button>
          <p>You don't have account? <span>Register Now</span></p>
          <h2>{err}</h2>
        </form>

      </div>
      <div className="register">
        <h2>Register</h2>
        <form onSubmit={registerSubmit}>
          <input type="text" name='name' id='register-name' placeholder='UseName' required value={user.name} onChange={onChangeInput} />

          <input type="email" name='email' id='register-email' placeholder='Email' required value={user.email} onChange={onChangeInput} />

          <input type="password" name="password" placeholder="password" id="register-password" required value={user.password} autoComplete="true" onChange={onChangeInput} />

          <button type='submit'>Register</button>
          <p>You have an account? <span>Login Now</span></p>
          <h2>{err}</h2>

        </form>

      </div>
    </section>
  )
}

export default Login