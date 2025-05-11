import React from 'react';

const MainInfoRight = (props) => {

    const dataFilm = props.filmInfo.film;

    return (
        <div className="main__info-right">
            <p>About</p>
            <div className="main__info-rigth-info">
                <div>
                    <p>Type:</p>
                    <p>{dataFilm.aboutInfo[0]}</p>
                </div>
                <div>
                    <p>Director:</p>
                    <p>{dataFilm.aboutInfo[1]}</p>
                </div>
                <div>
                    <p>Date aired:</p>
                    <p>{dataFilm.aboutInfo[2]}</p>
                </div>
                <div>
                    <p>Duration:</p>
                    <p>{dataFilm.aboutInfo[3]}</p>
                </div>
            </div>
        </div>
    );
};

export default MainInfoRight;