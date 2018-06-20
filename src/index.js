import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyCqgE0zVyA8wiIY756fBJxquXcKd7PKyX8';


// create a new react componenet which should produce html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       videos: [],
       selectedVideo: null 
    };
    this.videoSearch('surfboards');
    
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}


// take this created html and put on the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));