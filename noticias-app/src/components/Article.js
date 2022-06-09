import { Link } from "react-router-dom"
import '../App.css'


function Article({data, setArticleId}) {
  function handleLink () {
    setArticleId(data.id)
  }

    return (
      <div >
          <article className="Article">
            <Link onClick={handleLink} className="link" to="/article">
              <h3>{data?.titulo}</h3>
            </Link>
              <i>{data?.fecha.split('T00:00:00.000Z')}</i>
              <h4>{data?.entradilla}</h4>
              <div>{data?.positivo} 👍 &nbsp;&nbsp;&nbsp;&nbsp;
              {data?.negativo} 👎</div>
              <h5>#{data?.tema}</h5>
          </article>
      </div>
    )
  }

export default Article;