import { Navigate } from "react-router-dom"


function Logout({setToken}) {
  setToken(null)

  return (
    <><Navigate to="/"/></>
  )
}

export default Logout
