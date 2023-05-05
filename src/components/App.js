// create your App component here
import React, {useEffect, useState} from 'react'
    
const App = () => {
    const [img, setImg] = useState(null)

    useEffect(() => {
        async function fetchData () {
            const data = await fetch("https://dog.ceo/api/breeds/image/random")
            const resp = await data.json()
            setImg(resp.message
        )}
        fetchData()
    }, [])
    if(!img) {
        return <p>Loading...</p>
    }
  return (
    <img src={img} alt="A Random Dog"></img>
  )
}

export default App