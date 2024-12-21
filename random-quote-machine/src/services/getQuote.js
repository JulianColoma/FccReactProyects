import data from '../assets/quotes.json'
export function getQuote(){
    let random = Math.round((Math.random())*9)
    let newQuote = data.quotes[random]
    return newQuote
}