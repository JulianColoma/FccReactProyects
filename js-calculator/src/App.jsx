import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState('0')
  const handleClick = (e) => {
    const input = e.target.value
    const validatedInput = validate(input)
    let newres = result == '0'? result + validatedInput : validatedInput
    setResult(newres)
  }
  const validate = (input) =>{
    if(result.slice(-2).match(/^[+\-*/]+$/) && input.match(/[+\-*/]/)) return ''
    if(result[(result.length)-1] == '.' && input == '.') return ''
    if(result == '' && input.match(/[+\.*/]/)) return ''
    return input
  }
  const solver = () =>{
    let res = result
    const newres = eval(res)
    setResult(newres)
  }
  const clear = () =>{
    setResult('0')
  }

  return (
    <>
      <div id="display">{result}</div>
      <div id="grid" onClick={handleClick}>
        <button id="zero" value='0'>0</button>
        <button id="one" value='1'>1</button>
        <button id="two" value='2'>2</button>
        <button id="three" value='3'>3</button>
        <button id="four" value='4'>4</button>
        <button id="five" value='5'>5</button>
        <button id="six" value='6'>6</button>
        <button id="seven" value='7'>7</button>
        <button id="eight" value='8'>8</button>
        <button id="nine" value='9'>9</button>
        <button id="add" value='+'>+</button>
        <button id="subtract" value='-'>-</button>
        <button id="multiply" value='*'>x</button>
        <button id="divide" value='/'>/</button>
        <button id="decimal"value='.'>.</button>
      </div>
      <button id='clear'onClick={clear}>AC</button>
      <button id='equals' onClick={solver}>=</button>
    </>
  )
}

export default App
