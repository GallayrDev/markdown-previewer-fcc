import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown"
import remarkBreaks from 'remark-breaks';
const defaultMarkdownText = `# Welcome to My Markdown Previewer (H1 Header)

## This is a Subheader (H2)
### Here's a [link](https://www.example.com) to Example.com

You can write \`inline code\` like this. \`console.log("Hello, world!");\`

\`\`\`javascript
// This is a code block
function greet() {
  console.log("Hello, world!");
}
\`\`\`

- This is a list item
- Another list item

 > This is a blockquote. It can span multiple lines if you want.

Here's some **bolded text** for emphasis.

![Markdown Logo](https://markdown-here.com/img/icon256.png "Markdown Logo")
`;

function App() {
 const [markdownTex,setMarkDownText]=useState(defaultMarkdownText)
  return (
    <>
    <div className='container'>
  <h1 className='text-center my-5'>Markdown previewer</h1>
  <div className='row justify-content-center'>
    <textarea 
      className=' bg-dark  border rounded-start col-12 col-lg-5 me-lg-2 mb-5 p-3'
      name="editor" 
       style={{
    boxShadow: "0 0 10px white",
    minHeight: "200px",
    resize: "both",
    overflow: "auto"
  }}
      id="editor" 
      value={markdownTex} 
      onChange={(e)=>setMarkDownText(e.target.value)}>
    </textarea>

    <div 
    id="preview" 
     style={{
    boxShadow: "0 0 10px white",
    minHeight: "200px",
    resize: "both",
    overflow: "auto",
  }}
    className='bg-dark border rounded-end col-12 col-lg-5 ms-lg-2 p-3 '>
      <ReactMarkdown  remarkPlugins={[remarkBreaks]}>{markdownTex}</ReactMarkdown>
    </div>
  </div>
</div>

    </>
  )
}

export default App
