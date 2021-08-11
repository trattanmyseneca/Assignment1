
import './App.css';
import HomePage from './Pages/HomePage';
import AddMovieFormPage from './Pages/AddMovieFormPage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import UserRegistration from './Components/MidContent/UserRegistration';
import UserList from './Components/MidContent/UserList';
import Login from './Components/MidContent/Login';
import MainMoviePage from './Components/MidContent/MainMoviePage/MainMoviePage';
import MovieListingPage from './Components/MidContent/MovieListingPage/MovieListingPage'
import MovieComp from './Components/MovieComp'
import MovieDetailsPage from './Components/MidContent/MovieListingPage/MovieDetailsPage/MovieDetailsPage';
import { useState } from 'react';
import movieContext from './Components/Context/MovieContext';
import MoviePage from './Components/MidContent/MoviePage';
import MoviesList from './Components/MidContent/MoviesList/MoviesList';
function App() {

  const [movieId, setMovieId] = useState("");

  const editMovie = (id) => {
    setMovieId(id);
    setPageName("addmovie");
  }

  const onMovieClicked = (id) => {
    setMovieId(id);
   setPageName("movieDetailsPage");
  }

  const [pageName, setPageName] = useState("");

  const getCurrentView = () => {
    console.log(pageName);
    if (pageName === "movies") {
      return <MovieListingPage pageName={pageName} setPageName={setPageName} onMovieClicked={onMovieClicked} />;
    }
    else if (pageName === "movieDetailsPage") {
      return <MovieDetailsPage pageName={pageName} setPageName={setPageName} movieId={movieId} />;
    }
    else if (pageName === "home") {
      return <MainMoviePage pageName={pageName} setPageName={setPageName} onMovieClicked={onMovieClicked} />;
    }
    else if (pageName === "userregistration") {
      return <UserRegistration pageName={pageName} setPageName={setPageName} />;
    }
    else if (pageName === "userlist") {
      return <UserList pageName={pageName} setPageName={setPageName} />;
    }
    else if (pageName === "login") {
      return <Login pageName={pageName} setPageName={setPageName} />;
    }
    else if (pageName === "addmovie") {
      return <AddMovieFormPage pageName={pageName} setPageName={setPageName} movieId={movieId} />;
    }
    else if (pageName === "movielist") {
      return <MoviesList pageName={pageName} setPageName={setPageName} editMovie={editMovie} />;
    }
    else if (pageName === "moviesold") {
      return <MovieComp pageName={pageName} setPageName={setPageName} editMovie={editMovie} />;
    }
    else{
      return <Login pageName={pageName} setPageName={setPageName} />;
    }
  }


  return (
    <>
      <movieContext.Provider value={{movieId,setPageName}}>
        <div className="midDiv">
          <Header pageName={pageName} setPageName={setPageName}></Header>
          {getCurrentView()}
        </div>
        <Footer></Footer>
      </movieContext.Provider>
    </>
    //     <div className="App">
    //       <header className="App-header">
    // hi
    //       </header>
    //     </div>
  );
}
export default App;
