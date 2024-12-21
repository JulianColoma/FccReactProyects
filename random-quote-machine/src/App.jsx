import { useEffect, useState } from 'react'
import './App.css'
import { getQuote } from './services/getQuoteApi' //change the getQuoteApi for getQuote if you want to use the quotes.json
function App() {
const [quote, setQuote] = useState()

async function newQuote(){ //the async-await is only valid when the quotes are from the api
  let newQuote = await getQuote()
  setQuote(newQuote)
}
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const handleClick = () => {
  newQuote()
}

useEffect(()=>{
  newQuote()
},[])
useEffect(() => {
  if (quote) {
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;

    const textElement = document.getElementById('text');
    const authorElement = document.getElementById('author');
    const buttonElement = document.getElementById('new-quote');
    const twitterElement = document.getElementById('tweet-quote');
    if (textElement && authorElement) {
      twitterElement.style.color = newColor;
      buttonElement.style.color = newColor;
      textElement.style.color = newColor;
      authorElement.style.color = newColor;
    }
  }
}, [quote]);

return (
    <>
    {quote && 
    <div id='quote-box' className='card'>  
      <p id='text'>{quote.quote}</p>
      <p id='author'>-{quote.author}-</p>
      <div className='buttons'>
      <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote.quote}`} target='_top'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
        </svg>
      </a>
      <button id='new-quote' className='btn btn-light' onClick={handleClick}>New Quote</button>
      </div>
    </div>
    }
    </>
  )
}

export default App
