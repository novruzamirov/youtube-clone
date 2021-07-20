import React from 'react';

class VideoListItem extends React.Component{
    render(){
        return(
                <div className="videolist-item" onClick={() => {
                    this.props.handleVideoSelection(this.props.videos);
                }}>
                    <img  src={
                        this.props.shouldShrink 
                        ? this.props.videos.snippet.thumbnails.default.url 
                        : this.props.videos.snippet.thumbnails.medium.url
                    } 
                    alt="thumb"/>
                    <div className="videolist-item__desc">
                        <h4 className={`${this.props.shouldShrink && "videolist-item__desc__heading"}`}>
                            {this.props.videos.snippet.channelTitle}
                        </h4>
                        <p className={`${this.props.shouldShrink && "videolist-item__desc__paragraph"}`}>
                            {this.props.videos.snippet.title}
                        </p>
                    </div>
                </div>
        )
    }
}

export default VideoListItem;