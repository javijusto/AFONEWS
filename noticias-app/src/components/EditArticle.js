import { useState } from 'react'
import '../App.css'

function EditArticle({token, articleId}) {
  const [title, setTitle] = useState('')
  const [photo, setPhoto] = useState('')
  const [intro, setIntro] = useState('')
  const [text, setText] = useState('')
  const [topic, setTopic] = useState('')

  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try{
      const res = await fetch('http://localhost:4000/editarnoticia', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'Authorization': token },
        body: JSON.stringify({ id: articleId, titulo: title, foto: photo, entradilla: intro, texto: text, tema: topic })
      })

      if (res.ok) {
        document.getElementById('signupMsg').innerText = "Article " + articleId + " edited"
        
      } 
    } catch (e) {
      console.warn(e)
    }
    finally{
      setLoading(false)
    }
  }



return (
<div>
<form id="newArticle" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Title</legend>
        <input name="title" require="require" value={title} onChange={e => setTitle(e.target.value)} />
      </fieldset>
      <fieldset>
        <legend>Photo</legend>
        <input name="photo" value={photo} onChange={e => setPhoto(e.target.value)} />
      </fieldset>
      <fieldset>
        <legend>Intro</legend>
        <textarea name="intro" value={intro} onChange={e => setIntro(e.target.value)} />
      </fieldset>
      <fieldset>
        <legend>Text</legend>
        <textarea name="text" value={text} onChange={e => setText(e.target.value)} />
      </fieldset>
      <fieldset>
        <legend>Topic</legend>
        <input name="topic" require="require" value={topic} onChange={e => setTopic(e.target.value)} />
      </fieldset>
      <button disabled={loading}>
        {loading ? 'Loading...' : 'Edit article'}
      </button>
      <p id="signupMsg"></p>
</form>
</div>
)}

export default EditArticle;