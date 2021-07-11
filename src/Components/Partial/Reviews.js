import React, { Component } from 'react'

export default class Reviews extends Component {
    getReviewList=()=>{
        var reviewList=[];
                 this.props.selectedMovie.reviews.results.forEach((item, index) => {
                           reviewList.push(<p>{item.content}<i>- {item.author}</i></p>);
                         // return reviewList.push(' hi');
                        }
                      )
return reviewList;
                      
    }
    render() {
        return (
            <div>
            
            <div>
                {/* {{#unless .reviews.results}}
                    <i>No reviews yet!</i>
                {{/unless}} */}
               {this.getReviewList()}
               
            </div>
        
            </div>
        )
    }
}
