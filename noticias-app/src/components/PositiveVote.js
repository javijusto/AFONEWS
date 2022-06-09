import { useState } from "react"
import { Navigate } from "react-router-dom"
import '../App.css'

function PositiveVote({votes, token, id}) {
    const [refresh, setRefresh] = useState(null)
    const handleButton = async e => {
        e.preventDefault()
        try{
          const res = await fetch('http://localhost:4000/votarnoticia', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            'Authorization': token},     
            body: JSON.stringify({ id: id, pos: 1, neg: 0 })
          })
          if(res.ok){
            setRefresh(true)
          }
        } catch (e) {
          console.warn(e)
      }
    }

    if(refresh) return <Navigate to="/news"/>

return (
    <div>
        <button onClick={handleButton}>{votes} 👍</button>
  </div>
)}


export default PositiveVote
