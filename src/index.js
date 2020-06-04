import React from 'react';
import ReactDom from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    constructor(props){
        super(props);
        //we need to initialize the state when the component is created
        //this the only first and last time when we assign the state directly
        this.state={latitude:null, errorMessage:''};
        
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({latitude:position.coords.latitude});
            },
            err=>{
                this.setState({errorMessage:err.message});
            }
        );

    }
    renderContent(){
        if(this.state.errorMessage && !this.state.latitude){
            return   <Spinner message={this.state.errorMessage}/>;
         }
         else if(!this.state.errorMessage && this.state.latitude){
            return  <SeasonDisplay latitude={this.state.latitude}/>;
     }
     else{
        return <Spinner message="Please accept the location request"/>;
     }
    }
    render(){
        return <div>{this.renderContent()}</div>;
       
    }
}


ReactDom.render(<App/>,
    document.getElementById('root'));