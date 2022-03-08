import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
// import { export1 as alias1 } from "module-name";
// Grocery List basically
var VideoList = (props) => {

  return (
    <div className="video-list">

      {props.videos.map(video =>
        <VideoListEntry video={video} clickVideo={props.clickVideo} />
      )}

    </div>
  );
};



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};


// In the ES6 spec, files are "modules" and do not share a top-level Bscope.
// `var` declarations will only exist globally where explicitly defined.



export default VideoList;
