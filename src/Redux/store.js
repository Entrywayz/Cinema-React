import {configureStore} from "@reduxjs/toolkit";
import movies from "./Slices/moviesSlice.js";
import favorites from "./Slices/favoritesSlice.js";

const store = configureStore(
    {
        reducer: {
                movies,
                favorites
        }
});

export default store;