import { useState } from 'react'
import {Link, Navigate } from 'react-router-dom'
import '../App.css'


function Login({setToken, setId, token, setUserName}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError(true)
    try{
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},     
        body: JSON.stringify({ nombre: username, pass: password })
      })
      const data = await res.json()
      if (res.ok) {
        setToken(data.data)
        setUserName(username)
        const res2 = await fetch(`http://localhost:4000/usuarioactual/${username}`, {
          method: 'GET',
          headers: {'Content-Type': 'application/json',
        'Authorization': data.data},     
        })
        const info = await res2.json()
        setId(info[0].id)
      }
    } catch (e) {
      console.warn(e)
    } finally {
      setLoading(false)
      if(error){
        document.getElementById('signupMsg').innerText = "An error ocurred"
      }
    }  
  }

  if (token) return <Navigate to="/" />

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Username</legend>
        <input name="username" value={username} onChange={e => setUsername(e.target.value)} />
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </fieldset>
      <Link to="/signup" className='signLink'>If you don't have an account yet, register here</Link>
      <button disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
      </button>
      <p id="signupMsg"></p>
    </form>
  )
}

export default Login
