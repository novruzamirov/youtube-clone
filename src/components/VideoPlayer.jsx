import React from 'react';

class VideoPlayer extends React.Component{
    render(){
        return(
            <div>
                <iframe 
                title={this.props.videoId} 
                src={`https://www.youtube.com/embed/${this.props.videoId}`}
                frameBorder="0"
                allowFullScreen>
                </iframe>
            </div>
        )
    }
}

export default VideoPlayer;