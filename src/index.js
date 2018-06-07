import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCqgE0zVyA8wiIY756fBJxquXcKd7PKyX8';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});


// create a new react componenet which should produce html
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}


// take this created html and put on the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));