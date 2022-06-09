import UseFetch from "../hooks/UseFetch"
import { useState } from 'react'
import '../App.css'
import Article from "./Article"

function Topic({setArticleId}) {
  const [topic, setTopic] = useState('')

    const info= UseFetch(`http://localhost:4000/noticiastema/${topic}`)
  
  return (
      <div>
        <form>
          <fieldset>
            <legend>
              Topic
            </legend>
            <input type="text" placeholder="Choose a topic..." onChange={e => setTopic(e.target.value)}></input>
          </fieldset>
        </form>
        <div className="News">
          {info && info.map(r =>
          <Article data={r} setArticleId={setArticleId}/>
        )}
      </div>
      </div>
    )
  }

export default Topic