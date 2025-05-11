import React from 'react';
import Rating from "../Rating.jsx";
import {useDispatch} from "react-redux";
import {addFavoritesMovie, removeFavoritesMovie} from "../../../Redux/Slices/favoritesSlice.js";


const MainInfoLeft = (props) => {

    const dataFilm = props.filmInfo.film;

    const dispatch = useDispatch();

    return (
        <div className="main__info-left">
            <button
                className="main__info-left-favorite"
                onClick={() => dispatch(addFavoritesMovie(dataFilm))}
            >Add to Favorite</button>
            <button
                className="main__info-left-favorite"
                onClick={() => dispatch(removeFavoritesMovie(dataFilm))}
            >Remove from Favorite</button>
            <div className="main__info-left-title">
                <p>{dataFilm.title}</p>
                <Rating />
            </div>
            <div className="main__info-left-categoryes">
                {
                    dataFilm.categoryes.map((value, index) => (
                        <p key={index}>{value}</p>
                    ))
                }
            </div>
            <div className="main__info-left-about">
                <p>Description</p>
                <p> {
                        dataFilm.description
                    }
                </p>
            </div>
        </div>
    );
};

export default MainInfoLeft;