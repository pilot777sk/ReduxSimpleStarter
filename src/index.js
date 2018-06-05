import React from 'react';
import ReactDOM from 'react-dom';


// create a new react componenet which should produce html
const App = () => {
  return <div>Hi!</div>;
}


// take this created html and put on the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));