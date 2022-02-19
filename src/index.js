import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

function App() {
    return <h1><span> Hello from React! </span></h1>;
}   

ReactDOM.render(<App/>, document.getElementById('root'));   

if (module.hot) {
    module.hot.accept();
}