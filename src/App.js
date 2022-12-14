import {useState, useEffect} from "react"
import './App.css';

import Header from "./components/Header"
import Answer from "./components/Answer"

//need to finish styling and make the buttons work :(
function App() {
  const [question, setQuestion] = useState(null)
  const getQuestion = async () => {
    try {
      const response = await fetch(
        `https://jservice.io/api/random`
      )
       const data = await response.json()
       setQuestion(data)
    }catch (err) {
      console.error(err)
    }
  }

  useEffect( () => {
    getQuestion("113283")
  },[])
  return (
    <div className="App">
     <Header />
     <Answer random = {question} /> 
    </div>
  );
}

export default App;
