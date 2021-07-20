import React from 'react';

class SearchBar extends React.Component{
    state= {searchTerm: ""}
    render(){
        return(
            <div className="search-bar">
                <form onSubmit= {(e) => {
                    e.preventDefault();
                    this.props.handleFormSubmit(this.state.searchTerm);
                }}>
                    <p>Search for <span>YouTube</span> videos</p>
                    <input type="text" value={this.state.searchTerm} onChange={(e) => {
                        this.setState({searchTerm: e.target.value})
                    }}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;