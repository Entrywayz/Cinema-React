import Banner from "../components/Banner.jsx";
import Filter from "../components/Filter/Filter.jsx";
import MoviesList from "../components/Movies/MoviesList.jsx";
import MoviesScroll from "../components/Movies/MoviesScroll.jsx";

const Home = () => {

    return (
        <>
            <Banner />
            <div className="container">
                <Filter />
                <MoviesList />
                <MoviesScroll />
            </div>
        </>
    )
};

export default Home;