import React from 'react';

class VideoDescription extends React.Component{
    render(){
        return(
            <div className="video-description">
               <h4>{this.props.video.snippet.title}</h4>
               <p>Published at {this.props.video.snippet.publishedAt}</p>
               <h5>{this.props.video.snippet.description}</h5>
            </div>
        )
    }
}

export default VideoDescription;