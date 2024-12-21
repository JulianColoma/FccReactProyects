export async function getQuote(){
    const response = await fetch('https://zenquotes.io/api/[mode]/[key]')
    if(!response.ok){
        throw new Error(`Response status: ${response.status}`)
    }else{
        const quote = await response.json()
    }
    return quote[0]
}