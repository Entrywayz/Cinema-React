import React from 'react';
import background from "../../assets/Blade Runner 2049(2).jpg";

const Banner = () => {
    return (
        <>
            <div className="favorites__banner">
                <div className="gradient__overlay"></div>
                <img src={background} alt=""/>
            </div>
        </>
    );
};

export default Banner;