import { useState } from 'react'
import './App.css'
function App() {
  const [result, setResult] = useState('0')
  const [solved, setSolved ]= useState(false)
  const handleClick = (e) => {
    let res = result
    let input = e.target.value
    const newres = validate(input, res)
    setResult(newres)
    setSolved(false)
  }
  const validate = (input, res) =>{
    if(res.match(/^\d+\.\d+$/) && input == '.') input = ''
    if((res[(res.length)-1]) == '.' && input == '.') input = ''
    if(res == '' && input.match(/[+\.*/]/)) input = ''
    if(solved && !(input).match(/[+\-*/]/)) res = ''
    if(res == '0') res = ''
    return (res + input)
  }
  const solver = () =>{
    let res = result
      let parts = []
      for (let i = res.length - 1; i >= 0; i--) {
        if (res[i].match(/[+\*/]/) && res[i - 1] && res[i - 1].match(/[+\-*/]/)) {
          parts.unshift(res[i]);
          let j = 0;
          let k = i - 1;
          while (res[k] && res[k].match(/[+\-*/]/)) {
            k--;
            j++;
          }
          i -= j;
        } else {
          parts.unshift(res[i]);
        }
      }
      res = parts.join('')
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
      <div id="grid">
        <button id="zero" value='0' onClick={handleClick}>0</button>
        <button id="one" value='1' onClick={handleClick}>1</button>
        <button id="two" value='2'onClick={handleClick}>2</button>
        <button id="three" value='3'onClick={handleClick}>3</button>
        <button id="four" value='4'onClick={handleClick}>4</button>
        <button id="five" value='5'onClick={handleClick}>5</button>
        <button id="six" value='6'onClick={handleClick}>6</button>
        <button id="seven" value='7'onClick={handleClick}>7</button>
        <button id="eight" value='8'onClick={handleClick}>8</button>
        <button id="nine" value='9' onClick={handleClick}>9</button>
        <button id="add" value='+'onClick={handleClick}>+</button>
        <button id="subtract" value='-'onClick={handleClick}>-</button>
        <button id="multiply" value='*'onClick={handleClick}>x</button>
        <button id="divide" value='/'onClick={handleClick}>/</button>
        <button id="decimal"value='.'onClick={handleClick}>.</button>
        <button id='clear'onClick={clear}>AC</button>
        <button id='equals' onClick={solver}>=</button>
      </div>
    </>
  )
}

export default App
