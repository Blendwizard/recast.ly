import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '/src/lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {}
    };
  }

  // Handle change in currentVideo state
  clickVideo(targetVideo) {
    this.setState({
      currentVideo: {}
    });
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo}/></em> view goes here</h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={exampleVideoData} clickVideo={this.clickVideo.bind(this)}/></em> view goes here</h5></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {

    searchYouTube(query, callback);
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;