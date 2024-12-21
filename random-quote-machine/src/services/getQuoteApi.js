export async function getQuote(){
  const api_url ="https://dummyjson.com/quotes/random";
  const response = await fetch(api_url);
  let quote = await response.json();
  return quote
}





