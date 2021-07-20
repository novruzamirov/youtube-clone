import React from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends React.Component{
    render(){
        return(
            <div className={`videolist ${this.props.shouldShrink && "videolist__small"}`}>
                {
                   this.props.videoList.map((video) => {
                       return(
                            <div key={video.id.videoId}>
                                <VideoListItem videos={video} 
                                handleVideoSelection={this.props.handleVideoSelection} 
                                shouldShrink={this.props.shouldShrink}
                                />
                                <hr />
                            </div>
                       )
                       
                   })
                }
            </div>
        )
    }
}

export default VideoList;