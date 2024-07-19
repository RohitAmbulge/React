import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp()
{
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

// const reactElement = {
//     type : 'a',
//     props:{
//         href:'https://google.com',
//         target : '_blank'
//     },
//     children:'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)

const anotheruser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target:'_blank'},
    'click me to visit google',
    anotheruser 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    // anotherElement
    // reactElement
    <App />
  
)
    