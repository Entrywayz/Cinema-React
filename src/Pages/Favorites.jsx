import React from 'react';
import Filter from "../components/Filter/Filter.jsx";
import MoviesList from "../components/Movies/MoviesList.jsx";
import MoviesScroll from "../components/Movies/MoviesScroll.jsx";
import FavoritesList from "../components/Favorites/FavoritesList.jsx";
import Banner from "../components/Favorites/Banner.jsx";

const Favorites = () => {



    return (
        <>
            <Banner />
            <div className="container">
                <Filter />
                <div className="favorites_movies">
                    <FavoritesList />
                    <MoviesList />
                </div>
                <MoviesScroll />
            </div>
        </>
    );
};

export default Favorites;