import React, {useEffect} from 'react';
import MainInfoLeft from "./MainInfoLeft.jsx";
import MainInfoRight from "./MainInfoRight.jsx";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {searchFilmInState} from "../../../Redux/Slices/moviesSlice.js";

const MainInfo = () => {

    const id = useParams()

    const dispatch = useDispatch();

    const { searchFilm, status } = useSelector((store) => store.movies);

    useEffect(() => {
        if(status === 'fulfilled') {
            dispatch(searchFilmInState(id));
        }
    }, [dispatch, status]);



    return (
        <div className="main__info">
            {
                searchFilm.status === 'loading' ? ( <p>Loading...</p> ) : (
                    <>
                        <MainInfoLeft filmInfo={{...searchFilm}} />
                        <MainInfoRight filmInfo={{...searchFilm}}/>
                    </>
                )
            }

        </div>
    );
};

export default MainInfo;