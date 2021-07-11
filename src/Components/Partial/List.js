import React, { Component } from 'react';
import MovieTitle from './MovieTitle';

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            type: 'now_playing',
            title_filter:'',
            movies:[],
            isLoaded:false,
            getUrl:()=>{
                if (this.state.title_filter)
                    return 'https://api.themoviedb.org/3/search/movie?api_key=2498a34e67fe4a6a0a209316d830d942&query=' + window.encodeURIComponent(this.state.title_filter);
                else
                    return 'https://api.themoviedb.org/3/movie/' + this.state.type + '?api_key=2498a34e67fe4a6a0a209316d830d942'
           
            }
        };
        
    this.filterList = this.filterList.bind(this);
    }
    // componentDidMount() {
    //     this.movieList();
    //   }
    
    //   movieList() {
    //       //fetch repos
    //       var e='https://api.themoviedb.org/3/movie/popular?api_key=2498a34e67fe4a6a0a209316d830d942';
    //   fetch(e)
    //   .then(response => response.json())
    //   .then(data => {
    //     if (Array.isArray(data)) {
    //       console.log(JSON.stringify(data));
    //       this.setState({ repos: data ,
    //                      isLoading: false});
    //                      console.log(this.state.repos);
    //     }
    // });
         // alert(this.state.getUrl());
      //  fetch(this.state.getUrl())
         // .then(({ results }) => this.setState({ movies: results }));
        // .then(({ results }) => alert(results.page));
        
      //}
      componentDidMount() {
          if(this.state.movies.length==0)
       this.getMovielist();
      }
      getMovielist=()=>{
        fetch(this.state.getUrl())
        .then(res => res.json())
        .then(
          (result) => {
              //alert(this.state.isLoaded);
            this.setState({
              isLoaded: true,
              movies: result
            });
            //alert(result.page);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
              this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }
      movieClicked=(id)=>{
        this.props.setView('overviewDetails',id)
    }
      createMovie=()=>{
          var movieTitleList=[];
                   this.state.movies.results.forEach((item, index) => {
                            return movieTitleList.push(<MovieTitle  movieItem={item} key={index} movieClickedEvent={this.movieClicked}/>)
                            }
                        )
return movieTitleList;
                        
      }
      setView=function(viewName){
         // alert(viewName);
         this.state.type=viewName;
         this.setState({type:viewName});
         this.getMovielist();
      }

      filterList(event) {  
            this.setState({title_filter: event.target.value});
           // this.getMovielist();
          }
    render() {
        return (
            <div>
                 <h1>Movies <small>Single page app!</small></h1>
            
            <div class="pull-right">
                {/* <input className="form-control"  value={this.state.title_filter} placeholder="Search title..." />
            */}
          {/* <input type="text" value={this.state.title_filter} onChange={this.filterList} className="form-control"  />  */}
            </div>
        
            <ul class="nav nav-pills">
                <li className={!this.state.title_filter  &&this.state.type == 'now_playing' ? 'active' : ''} onClick={()=>this.setView('now_playing')}><a href="#">Now playing</a></li>
                <li className={!this.state.title_filter &&this.state.type == 'popular' ? 'active' : ''} onClick={()=>this.setView('popular')}><a href="#">Popular</a></li>
                <li className={!this.state.title_filter &&this.state.type == 'top_rated' ? 'active' : ''} onClick={()=>this.setView('top_rated')}><a href="#">Top rated</a></li>
                <li className={!this.state.title_filter  &&this.state.type == 'upcoming' ? 'active' : ''} onClick={()=>this.setView('upcoming')}><a href="#">Upcoming</a></li>
            </ul>
            
            <div class="tiles">
                
                {/* {{#each movies}}
                    {{>movie_tile}}
                {{/each}} */}

               { 
              
             this.state.isLoaded?  
            this.createMovie()
             :''
                //         this.state.movies.results.forEach((item, index) => {
                //    return 'hi'}
                //         )
               }
            </div>
            </div>
        )
    }
}
