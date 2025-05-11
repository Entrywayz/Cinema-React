import React, {useState} from 'react';

const FilterCategories = () => {

    const [status, setStatus] = useState('Popular');

    let filterCategories = ['Popular', 'Novelty', 'Featured', 'Short films']

    return (
        <div id="categoryes" className="filter__categoryes anchor">
            <div className="filter__categoryes-flex">
                {
                    filterCategories.map((categorie,index) => (
                        <div onClick={() => setStatus(categorie)}
                             className={`filter__categoryes-item ${categorie === status ? 'active-category' : ''}`}
                             key={index}
                        >
                            <p>{categorie}</p>
                            <span></span>
                        </div>
                    ))
                }

            </div>
            <span></span>
        </div>
    );
};

export default FilterCategories;