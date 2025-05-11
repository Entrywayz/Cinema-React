import MoviesCard from "./MoviesCard.jsx";

const MoviesCards = ({films}) => {

    let moviesToShow = []
    //const moviesToShow = films.filteredMovies.length > 0 ? films.filteredMovies : films.films

    if(films.filteredMovies.length > 0) {
        moviesToShow = films.filteredMovies
    } else if(films.filteredMoviesCategories.length > 0) {
        moviesToShow = films.filteredMoviesCategories
    } else {
        moviesToShow = films.films
    }

    return moviesToShow.map((value, index) => <MoviesCard key={index} {...value} />)
};

export default MoviesCards;