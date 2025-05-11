import React from 'react';
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import FavoriteMoviesList from "./FavoriteMoviesList.jsx";
import LoadingMovies from "./LoadingMovies.jsx";
import MoviesCards from "./MoviesCards.jsx";

const MoviesList = () => {

    const path = useLocation();

    const { films, status, filteredMovies, filteredMoviesCategories } = useSelector(store => store.movies);
    const { favoritesMovies } = useSelector(store => store.favorites);

    return (
        <div id="movies" className="movies anchor">
            {path.pathname === '/favorites' ? (
                    <FavoriteMoviesList favorites={{favoritesMovies, filteredMovies, filteredMoviesCategories}} />
                ) : status === 'loading' ? (
                    <LoadingMovies />
                ) : (
                    <MoviesCards films={{ films, filteredMovies, filteredMoviesCategories }} />
                )}
        </div>
     )

};

export default MoviesList;