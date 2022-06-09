
import UseFetch from "../hooks/UseFetch"
import '../App.css'
import Article from "./Article"

function UserArticles({token, userId, setArticleId}) {

  const info= UseFetch(`http://localhost:4000/noticiasusuario/${userId}`, token) 
return (
    <div className="userNews News">
      {info && info.map(r =>
      <div>
        <Article data={r} setArticleId={setArticleId}/>
      </div>
        )}
    </div>
)}


export default UserArticles
