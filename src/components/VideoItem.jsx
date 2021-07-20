import React from 'react';
import VideoPlayer from './VideoPlayer';

class VideoItem extends React.Component{
    render(){
        return(
            <div className="video">
                <VideoPlayer videoId={this.props.selectedVideo.id.videoId}/> 
            </div>
        )
    }
}

export default VideoItem;