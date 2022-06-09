import { useState, useEffect } from 'react'

const UseFetch = (url, token) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    let params = !token ? {} : {
      headers: { 'Authorization': token }
    }

    fetch(url, params)
      .then(res => res.json())
      .then(resData => setData(resData))
  }, [url, token])

  return data
}

export default UseFetch
