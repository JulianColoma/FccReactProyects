import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState('0')
  const [solved, setSolved ]= useState(false)
  const handleClick = (e) => {
    let res = result
    let input = e.target.value
    const newres = validate(input, res)
    console.log('--------------')
    console.log(res)
    console.log(newres)
    setResult(newres)
    setSolved(false)
  }
  const validate = (input, res) =>{
    if(res.match(/^\d+\.\d+$/) && input == '.') input = ''
    if((res[(res.length)-1]) == '.' && input == '.') input = ''
    if(res == '' && input.match(/[+\.*/]/)) input = ''
    if(solved && !(input).match(/[+\-*/]/)) res = ''
    if(res == '0') res = ''
    if(res[(res.length -1)]){
      //if((res[(res.length -1)]).match(/[+\-*/]/) && input.match(/[+\-*/]/)) res[res.length -1] = input
    }
    return (res + input)
  }
  const solver = () =>{
    const res = result
    let newres = eval(res) % 1 !== 0 ? round(eval(res)) : eval(res)
    setResult(newres.toString())
    setSolved(true)
  }
  const round = (num) => {
    let strnum = (Math.round(num * 10000)/10000).toString()
    let parts = strnum.split('.')
    let beforeDot = parts[0]
    let afterDot = parts[1].replace(/0+$/, "");

    return `${beforeDot}.${afterDot}`
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
