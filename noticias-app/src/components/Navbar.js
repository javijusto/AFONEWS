import { Routes, Route, Link } from 'react-router-dom'
import Home from'./Home';
import Date from'./Date';
import News from'./News';
import Login from'./Login';
import Logout from'./Logout';
import Topic from'./Topic';
import { useState } from 'react';
import Signup from './Signup';
import UserArticles from './UserArticles';
import NewArticle from './NewArticle';
import UserConf from './UserConf';
import EditArticle from './EditArticle';
import ArticlePage from './ArticlePage';
import '../App.css'

function Navbar() { 
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [userName, setUserName] = useState(null)
  const [articleId, setArticleId] = useState(null)
  


 return(
 <div>
  <nav>
    <Link className="navlink" to="/">Home</Link>
    <Link className="navlink" to="/news">News</Link>
    <Link className="navlink" to="/date">Date</Link>
    <Link className="navlink" to="/topic">Topic</Link>
    <span>
    { token ? <Link className="navlink" to="/logout">Logout</Link>
    : <Link className="navlink" to="/login">Login</Link> }
    </span>
  </nav>
  { token ? <nav className='userNavBar'>
    <Link className="navlink" to="/newarticle">New article</Link>
    <Link className="navlink" to="/userarticles">My articles</Link>
    <span>
    <Link className="navlink" to="/userconf"><span>👤 {userName}</span></Link>
    </span>
  </nav>
  : <></>
  }
 <Routes>
   <Route path="/" exact element={<Home/>} />
   <Route path="/news" element={<News setArticleId={setArticleId}/>} />
   <Route path="/date" element={<Date setArticleId={setArticleId}/>} />
   <Route path="/topic" element={<Topic setArticleId={setArticleId}/>} />
   <Route path="/login" element={<Login setToken = {setToken} setId={setUserId} token={token} setUserName={setUserName}/>} />
   <Route path="/signup" element={<Signup />} />
   <Route path="/newarticle" element={<NewArticle token= {token}/>} />
   <Route path="/userarticles" element={<UserArticles token= {token} userId= {userId} setArticleId={setArticleId}/>} />
   <Route path="/userconf" element={<UserConf token= {token} userId= {userId} userName={userName} setUserName={setUserName} />} />
   <Route path="/article" element={<ArticlePage token ={token} articleId={articleId} userId={userId}/>} />
   <Route path="/editarticle" element={<EditArticle token ={token} articleId={articleId}/>} />
   <Route path="/logout" element={<Logout setToken= {setToken}/>} />
 </Routes>
</div>
    
)}

export default Navbar;