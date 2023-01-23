import React,{useEffect, useState} from 'react'

function App(){
  const [backendData, setBackendData] = useState([{}])
  useEffect(() =>{
    fetch ("http://localhost:5000/api".then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    ))
  }, [])
  return (
    <div>
      {(typeof backendData)}
    </div>
  )
} 
export default App 