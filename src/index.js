import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCqgE0zVyA8wiIY756fBJxquXcKd7PKyX8';


// create a new react componenet which should produce html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
    <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
    </div>
    );
  }
}


// take this created html and put on the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));