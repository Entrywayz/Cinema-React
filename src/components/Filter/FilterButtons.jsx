import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchFilmCategories} from "../../Redux/Slices/moviesSlice.js";

const FilterButtons = () => {

    const dispatch = useDispatch()

    const { filmsCategory } = useSelector(store => store.movies)

    const [active, setActive] = useState('All');

    const categoryButton = (value) => {
        setActive(value)
        dispatch(searchFilmCategories(value))
    }

    return (
        <div className="filter__buttons">
            <button onClick={() => categoryButton(('All'))} className={active === 'All' ? 'active' : ''}>All</button>
            {
                filmsCategory.map((value, index) => (
                    <button key={index} onClick={() => categoryButton(value)} className={value === active ? 'active' : ''}>{value}</button>
                ))}
        </div>
    );
};

export default FilterButtons;