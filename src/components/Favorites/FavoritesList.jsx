import React from 'react';
import FavoritesCard from "./FavoritesCard.jsx";

const FavoritesList = () => {
    return (
        <>
            <div className="top-movies">
                <p>Top Rated Films</p>
                <FavoritesCard />
            </div>
        </>
    );
};

export default FavoritesList;