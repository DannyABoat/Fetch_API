import { useState, useEffect } from "react"
import "./App.css"

// https://cat-fact.herokuapp.com/facts/random

const App = () => {
  const [fact, setFact] = useState({})
  const [ setData ] = useState({})

  // equivalent to componentDidMount
  useEffect(() => {
    handleFetch()
  }, [])

  //   equivalent to componentDidUpdate
  //   but with specification
  useEffect(() => {
    console.log("The fact has changed")
  }, [fact])

  useEffect(() => {
    console.log("component did update")
  })

  const handleFetch = async () => {
    const res = await fetch("https://cat-fact.herokuapp.com/facts/random")
    const data = await res.json()

    setFact(data)
  }

  return (
    <div className= "main">
      <h1>Hello API's!</h1>
      <button onClick={handleFetch}>Run the fetch request!</button>
      <button onClick={() => setData("hi")}>Add data</button>
      <p>{fact.text}</p>
    </div>
  )
}

export default App
