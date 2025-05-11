import {Provider, useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchMovies} from "./Redux/Slices/moviesSlice.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Home from "./Pages/Home.jsx";
import Favorites from "./Pages/Favorites.jsx";
import Movie from "./Pages/Movie.jsx";
import NotFound from "./components/NotFound.jsx";
import Footer from "./components/layout/Footer.jsx";

const AppMain = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchMovies());
    }, [])

    return (
        <>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favorites" element={<Favorites/>} />
                        <Route path="/movie/:id" element={<Movie />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
};

export default AppMain;