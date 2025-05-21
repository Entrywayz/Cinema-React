import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    films: [],
    filmsCategory: [],
    status: null,
    errors: null,
    searchFilm: {
        film: null,
        status: 'loading',
        error: null,
    },
    filteredMovies: [],
    filteredMoviesCategories: [],
}

export const fetchMovies = createAsyncThunk('movie/fetchMovies', () => {
    //[
    //    {
    //        "title": "Один дома",
    //        "description": "Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома… одного из своих детей. Юное создание, однако, не теряется и демонстрирует чудеса изобретательности. И когда в дом залезают грабители, им приходится не раз пожалеть о встрече с милым крошкой.",
    //        "trailerUrl": "https://www.youtube.com/watch?v=bBU_64CTNsw",
    //        "imageUrl": "https://upload.wikimedia.org/wikipedia/ru/thumb/0/03/Home_Alone_dvd_rus.jpg/1200px-Home_Alone_dvd_rus.jpg",
    //        "categoryes": [
    //            "0+",
    //            1991, "Movie",
    //            "Family"
    //        ],
    //        "category": [
    //            "Comedy",
    //            "Drama"
    //        ],
    //        "aboutInfo": [
    //            "Movie",
    //            "Крис Коламбус",
    //            "18.01.1991",
    //            103],
    //        "id": "1"
    //    },]
    return axios.get(PASTE_URL_API)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            switch(error.response?.status) {
                case 500:
                    console.log('Error, wait fix')
                    break;
                default:
                    break;
            }
        })
})

const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        searchFilmInState: (state, action) => {
            const { id }= action.payload;
            const searchFilm = state.films.find(film => film.id === id);
            state.searchFilm.film = searchFilm;
            state.searchFilm.status = 'fulfilled';
        },
        filterMovies: (state, action) => {
            if(action.payload === '') {
                state.filteredMovies = []
            } else {
                const searchTerm = action.payload.toLowerCase();
                state.filteredMovies = state.films.filter(movie => movie.title.toLowerCase().includes(searchTerm))
            }
        },
        searchFilmCategories: ((state, action) => {
            if(action.payload === 'All') {
                state.filteredMoviesCategories = []
            }
            const searchFilms = state.films.filter((value, _) => value.category.includes(action.payload));
            state.filteredMoviesCategories = searchFilms;
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) =>{
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.films = action.payload;
                state.filmsCategory = [... new Set(action.payload.flatMap((value, _) => value.category))];
                state.status = 'fulfilled';
            })
            .addCase(fetchMovies.rejected, (state, action) =>{
                state.status = 'loading';
                state.errors = action.error.message;
                console.error(action.error.message);
            })
    }
})

export default moviesSlice.reducer;
export const { searchFilmInState, filterMovies, searchFilmCategories} = moviesSlice.actions;
