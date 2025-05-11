import React from 'react';
import MoviesCard from "./MoviesCard.jsx";

const FavoriteMoviesList = ({ favorites }) => {

    let moviesToShow = []

    if(favorites.filteredMovies.length > 0) {
        moviesToShow = favorites.filteredMovies.filter(searchFilms => {
            return favorites.favoritesMovies.some(searchTitle => searchTitle.title === searchFilms.title)
        })
    } else if(favorites.filteredMoviesCategories.length > 0) {
        moviesToShow = favorites.filteredMoviesCategories.filter(searchFilms => {
            return favorites.favoritesMovies.some(searchTitle => searchTitle.title === searchFilms.title)
        })
    } else if(favorites.favoritesMovies.length === 0) {
        return <p>You don't have favorite movies</p>
    } else {
        moviesToShow = favorites.favoritesMovies
    }

    if(favorites.favoritesMovies.length === 0) {
        return <p>You don't have favorites movies</p>
    }
    return (
        moviesToShow.map((value, index) => <MoviesCard key={index} {...value} />)
    )
};

export default FavoriteMoviesList;