import UseFetch from "../hooks/UseFetch"
import Article from "./Article"
import '../App.css'

function News({setArticleId}) {

    const info= UseFetch('http://localhost:4000/noticiasdeldia')
    return (
      <div className="News">
          {info && info.map(r =>
          <Article data={r} setArticleId={setArticleId}/>
        )}
        {!info && 
          <p id="error">No hay noticias en la base de datos</p>
        } 
      </div>
    )
  }

export default News;