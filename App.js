import React from 'react'
import ReactDOM from 'react-dom'

const struct = React.createElement('div', {}, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', {}, "h1 test child1 🚀"),
        React.createElement('h2', {}, "h2 test child1")
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, "h1 test child3"),
        React.createElement('h2', {}, "h2 test child2")
    ])
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(struct);