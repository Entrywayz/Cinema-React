import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found-container">
            404 Page Not Found.
            <Link to={"/"} className="go-to-home" >Go to home</Link>

        </div>
    );
};

export default NotFound;