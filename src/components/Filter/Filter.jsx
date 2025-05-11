import React from 'react';
import FilterCategories from "./FilterCategories.jsx";
import FilterButtons from "./FilterButtons.jsx";
import FilterSearch from "./FilterSearch.jsx";

const Filter = () => {



    return (
        <div className="filter">
            <FilterCategories />
            <FilterButtons />
            <FilterSearch />
        </div>
    );
};

export default Filter;