import React, { Component } from 'react';
import '../CSS/movie.css';
import MyClassComp from './MyClassComp';
import Moviedetails from './Moviedetails';
import List from './Partial/List';
import OverView from './Moviedetails';


export default class MovieComp extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            view: 'list',
            type: 'now_playing',
            overViewid:''
        };

        //  this.setView=this.setView.bind(this);
    }

    goToHome=()=>{
        this.setState({
            view:'list',
            type:'now_playing'
        });
    }
   
    setView =  (viewName,id)=> {
       // alert('hi');
        this.setState({view: viewName,overViewid:id });
    }


    render() {
      const  getCurrentView=()=>{
            if(this.state.view=='list')
            return <List setView={this.setView}/>;
            if(this.state.view=='overviewDetails')
            return <Moviedetails setView={this.setView} goToHome={this.goToHome} id={this.state.overViewid}/>;
        }
       // var a = this.props.a;
        return (
            <div className='modal-contents'>
                {getCurrentView()}
            </div>
        )
    }
}
