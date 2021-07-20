import React from 'react';
import '../style.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import Loader from './Loader';
import VideoItem from './VideoItem';
import VideoDescription from './VideoDescription';
import axios from 'axios';
import {YOUTUBE_API_KEY} from '../api';

class App extends React.Component{
    state= {videoList: [], isLoading: false, selectedVideo: null};
    handleFormSubmit = (searchTerm) => {
        if(searchTerm){
            this.setState({videoList: [], isLoading: true, selectedVideo: null});
            axios.get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    part: 'snippet',
                    type: 'video',
                    maxResults: 10,
                    key: YOUTUBE_API_KEY,
                    q: searchTerm
                }
            }).then((result) => {
                this.setState({videoList: result.data.items, isLoading: false});
            })
        }
    }

    handleVideoSelection = (selectedVideo) => {
        console.log(selectedVideo);
        this.setState({selectedVideo: selectedVideo})
    }   


    render(){
        return(
            <div className="app">
                <SearchBar handleFormSubmit={this.handleFormSubmit}/>
                <Loader isLoading={this.state.isLoading}/>
                <div className="video-content">
                    <div className="video-content__left">
                        {Boolean(this.state.selectedVideo) && <VideoItem selectedVideo={this.state.selectedVideo}/>}
                        {Boolean(this.state.selectedVideo) && <VideoDescription video={this.state.selectedVideo}/>}
                    </div>
                
                    <VideoList videoList={this.state.videoList} 
                    handleVideoSelection={this.handleVideoSelection} 
                    shouldShrink={Boolean(this.state.selectedVideo)} 
                    />
                   
                    
                </div>

                
            </div>
        )
    }
}

export default App;
