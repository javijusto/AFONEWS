import { useState} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [useremail, setEmail] = useState('')
  const [photo, setPhoto] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try{
      const res = await fetch('http://localhost:4000/registro', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},     
        body: JSON.stringify({ nombre: username, pass: password, email: useremail, foto: photo })
      })
      if(res.ok){
        document.getElementById('signupMsg').innerText = "User " + username + " registred"
      }
    } catch (e) {
      console.warn(e)
    } finally {
      setLoading(false)

    }  
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Username</legend>
        <input name="username" require="require" value={username} onChange={e => setUsername(e.target.value)} />
      </fieldset>
      <fieldset>
        <legend>Email</legend>
        <input name="email" require="require" type="email" value={useremail} onChange={e => setEmail(e.target.value)} />
      </fieldset>
      <fieldset>
        <legend>Photo</legend>
        <input name="photo" value={photo} onChange={e => setPhoto(e.target.value)} />
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <input name="password" require="require" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </fieldset>
      <Link to="/login" className='signLink'>Do you already have an account? Login here</Link>
      <button disabled={loading}>
        {loading ? 'Loading...' : 'Sign up'}
      </button>
      <p id="signupMsg"></p>
    </form>
  )
}

export default Signup;