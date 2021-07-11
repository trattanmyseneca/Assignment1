import React, { Component } from 'react';
import Star from './Star'
export default class MovieTitle extends Component {
   
    gerImgURL=()=>{return 'https://image.tmdb.org/t/p/w92'+this.props.movieItem.poster_path};
    movieClicked=function (){
        if(this.props.movieClickedEvent)
        this.props.movieClickedEvent(this.props.movieItem.id);
    }
    render() {
        return (
            
                <div onClick={()=>this.movieClicked()}>
                    
                 <img src={this.gerImgURL()}  />
                 <div className='padding10'>
                     <h3>{this.props.movieItem.title}</h3>
                     <p><i><small>{this.props.movieItem.release_date}</small></i></p>
                     <div>
                         <Star starMovie={this.props.movieItem}/>
                     </div>
                 </div>
               
            </div>
            
        )
    }
}
