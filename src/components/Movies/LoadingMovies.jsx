import React from 'react';
import SkeletonFilm from "../Skeletons/SkeletonFilm.jsx";

const LoadingMovies = () => {
    return (
        [... new Array(12)].map((_, index) => <SkeletonFilm key={index} />)
    );
};

export default LoadingMovies;