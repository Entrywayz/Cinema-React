import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import { filterMovies } from "../../Redux/Slices/moviesSlice.js";

const FilterSearch = () => {

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            dispatch(filterMovies(searchTerm))
        }, 1000)
        return () => clearTimeout(handler)
    }, [searchTerm, dispatch])

    return (
        <div className="filter__search">
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search..."/>
            <button>
                <i className="fa fa-search"></i>
            </button>
        </div>
    );
};

export default FilterSearch;