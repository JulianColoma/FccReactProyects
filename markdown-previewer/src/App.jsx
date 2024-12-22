import { useEffect, useState } from 'react'
import './App.css'
import DOMPurify from 'dompurify';
function App() {
  marked.setOptions({
    gfm: true,
    breaks: true,
  });
  const placeholder = `
# Welcome to My Markdown Previewer!

## This is a Sub-heading

Here is a [link](https://example.com) for you to explore.

Code example: 
\`\`\` 
javascript 
console.log('Hello, world!');
\`\`\` 

\` console.log("Hello, world!") \`

- This is a list item.
- You can add more items like this.

> This is a blockquote. Inspirational, isn’t it?

![Placeholder Image](https://via.placeholder.com/150)

**This text is bold!**

`;
const [text, setText] = useState(placeholder)
  const handleChange = (e) => {
    let val = e.target.value;
    setText(val)
  }
  useEffect(()=>{
    document.getElementById('preview').innerHTML = DOMPurify.sanitize(marked.parse(text))
  }, [text])
  return (
    <div className='container'>
      <h1 id='title'>Markdown previewer</h1>
      <label htmlFor="editor">Editor</label>
     <textarea name="input" id="editor" onChange={handleChange} defaultValue={placeholder}></textarea>
     <label htmlFor="preview">Preview</label>
     <div id="preview"></div>
    </div>
  )
}

export default App
