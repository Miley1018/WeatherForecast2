import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchWeather from '../actions/fetchweather';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            term:''
        }
        const handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this);
        this.props.fetchWeather(this.props.state.term);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text'placeholder='Get a five-day forecast' onChange={(event)=>{this.setState({term:event.target.value})}}/>
                    <button type='submit'>Check</button>
                </form>
            </div>
        )
    }
}

export default connect(null,fetchWeather)(Search);