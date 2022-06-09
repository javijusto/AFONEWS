import { useState } from "react"
import '../App.css'


function UserConf({token, userId, userName, setUserName}) {
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [bio, setBio] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handleUser = async e => {
    e.preventDefault()
    setLoading(true)
    try{
      const res = await fetch('http://localhost:4000/editarusuario', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'Authorization': token},
        body: JSON.stringify({id: userId, nombre: name, email:email, bio:bio, foto:photo, pass:pass })
      })
        if (res.ok){
         setUserName(name)
         document.getElementById('signupMsg').innerText = "User " + userName + " edited to " + name
        } 
    }   
    catch(e){
      console.warn(e)
    } finally {
      setLoading(false)
    }  
  }

return (
    <div>
      <div>
        <h1>User data</h1>
        <form>
          <fieldset>
            <legend>
              Nombre
            </legend>
            <input name="name" value={name} onChange={e => setName(e.target.value)} />
          </fieldset>
          <fieldset>
            <legend>
              Photo
            </legend>
            <input name="photo" value={photo} onChange={e => setPhoto(e.target.value)} />
          </fieldset>
          <fieldset>
            <legend>
              Bio
            </legend>
            <textarea name="bio" value={bio} onChange={e => setBio(e.target.value)} />
          </fieldset>
          <fieldset>
            <legend>
              Email
            </legend>
            <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </fieldset>
          <fieldset>
            <legend>
              Pass
            </legend>
            <input name="pass" type="password" value={pass} onChange={e => setPass(e.target.value)} />
          </fieldset>
          <button onClick={handleUser} disabled={loading}>
        {loading ? 'Editing user data...' : 'Edit user'}</button>
        <p id="signupMsg"></p>
        </form>
      </div>
  </div>
)}


export default UserConf