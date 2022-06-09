import UseFetch from "../hooks/UseFetch"
import '../App.css'
import { useState } from 'react'
import Article from "./Article"

function Date({setArticleId}) {
  
  const [date, setDate] = useState('')

  const info= UseFetch(`http://localhost:4000/noticiasfecha/${date}`)
 return (
      <div>
        <form>
          <fieldset>
            <legend>
              Date
            </legend>
            <input type="date" onChange={e => setDate(e.target.value)}></input>
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

export default Date;