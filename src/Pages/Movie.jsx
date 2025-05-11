import React from 'react';
import Video from "../components/Movie/Video.jsx";
import MainInfo from "../components/Movie/MainInfo/MainInfo.jsx";

const Movie = () => {

    return (
        <>
            <main>
                <Video />
                <MainInfo />
            </main>
        </>
    );
};

export default Movie;