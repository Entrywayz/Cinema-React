import React from 'react';
import star from "../../assets/icons/star.png";

const Rating = () => {
    return (
        <div className="main__info-rating">
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
        </div>
    );
};

export default Rating;