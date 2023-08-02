{/* <div>
    <div id="child1">
        <h1>h1 test child1</h1>
        <h2>h2 test child1</h2>
    </div>
    <div id="child2">
        <h1>h1 test child2</h1>
        <h2>h2 test child2</h2>
    </div>
</div> */}



const struct = React.createElement('div', {}, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', {}, "h1 test child1"),
        React.createElement('h2', {}, "h2 test child1")
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, "h1 test child2"),
        React.createElement('h2', {}, "h2 test child2")
    ])
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(struct);