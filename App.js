import React from 'react'
import ReactDOM from 'react-dom'

const heading = React.createElement("h1", { id: "heading" }, "testting 🚀")
const root = ReactDOM.createRoot(document.getElementById('root'));

// using jsx -babel transpiling html like syntax which is jsx to react element 

const JSXHeading = (<h1 id='heading'>
    jsx heading 🚀
</h1>)


// component introduction 
const Title = () => {
    return (
        <h1 id='heading'>Title From Functional Component</h1>
    )
}


// this is also known as component composition
// component inside component
const Heading = () => (
    <div>
        <Title />
        <h1>Heading From Functional Component</h1>
    </div>
)


root.render(<Heading />);