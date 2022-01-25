import { useState, useEffect } from "react"
import './App.css'

// https://cat-fact.herokuapp.com/facts/random

const App = () => {
    const [fact, setFact] = useState({})
    const [data, setData] = useState({})


    // equivalent to componentDidMount
    useEffect(() => {
        handleFetch()
    }, [])


      // equivalent to componentDidUpdate
  //   but with specification
    // useEffect(() => {
    //     console.log("The fact has changed")
    // }, [fact])

    // useEffect(() => {
    //     console.log("Component did update")
    // })

    const handleFetch = async () => {
        const response = await fetch("https://cat-fact.herokuapp.com/facts/random")
        const data = await response.json()
        console.log(data)

        setFact(data)
        
    }


    return(
        <div>
            <h1>Hello API's!</h1>
            <button onClick={handleFetch}> Run the fetch request!</button>
            <button onClick={() => setData("Hi")}>Add data</button>
            <p>{fact.test}</p>
        </div>
    )
}

export default App;
