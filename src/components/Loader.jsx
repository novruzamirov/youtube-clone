import React from 'react';
import loader from '../images/loader.svg';

class Loader extends React.Component{
    render(){
        return(
            <div className="loader" 
            style={{display: `${this.props.isLoading ? "block" : "none"}`}}>
                <img src={loader} alt="loader"/>
            </div>
        )
    }
}

export default Loader;