import { useEffect, useState } from 'react'
import './App.css'
import { getQuote } from './services/getQuote' // change the path to ./services/getQuoteApi if you are using an API
function App() {
const [quote, setQuote] = useState()

const newQuote = () => {
  let newQuote = getQuote()
  setQuote(newQuote)
}

const handleClick = () => {
  newQuote()
}

useEffect(()=>{
  newQuote()
},[])

return (
    <>
    {quote && 
    <div id='quote-box'>  
      <p id='text'>{quote.quote}</p>
      <p id='author'>{quote.author}</p>
      <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote.quote}`} target='_top'>tuit</a>
      <button id='new-quote' onClick={handleClick}>New Quote</button>
    </div>
    }
    </>
  )
}

export default App
