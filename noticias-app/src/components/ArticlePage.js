import UseFetch from "../hooks/UseFetch"
import PositiveVote from "./PositiveVote"
import NegativeVote from "./NegativeVote"
import '../App.css'
import { Link } from "react-router-dom"
import image from '../img/bomba.jpg'

function ArticlePage({token, articleId, userId}) {
    const info= UseFetch(`http://localhost:4000/noticia/${articleId}`)
    return (
      <div className="News">
        {info && info.map(r =>
          <article className="ArticlePage">
              {userId===r.usuario ?         
              <Link className="link" to="/editarticle">
                <button> ✏️</button>
              </Link>
              : <></>}
              <h2>{r?.titulo}</h2>
              <i>{r?.fecha.split('T00:00:00.000Z')}</i>
              {r.foto ? <img src={image} alt={r?.foto} /> : <></>}
              <h4>{r?.entradilla}</h4>
              <p>{r?.texto}</p>
              <div>{ token ? 
              <div><PositiveVote votes={r?.positivo} token= {token} id={r?.id}/>
              <NegativeVote votes={r?.negativo} token= {token} id={r?.id}/></div>
                : <></>}</div>
              <h5>#{r?.tema}</h5>
          </article>
        )}
      </div>
    )
  }

export default ArticlePage;