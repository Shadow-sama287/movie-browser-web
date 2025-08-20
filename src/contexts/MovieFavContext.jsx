import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // check if there are any favourite movies stored in local storage of browser.
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) setFavorites(JSON.parse(storedFavs));
    }, []);

    // whenever a new movie is add to favorites, we store it in local storage.
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavs = (movie) => {
        setFavorites((prev) => [...prev, movie]);
    };

    const removeFromFavs = (movieId) => {
        setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    const isFav = (movieId) => {
        return favorites.some((movie) => movie.id === movieId);
    };

    const value = {
        favorites,
        addToFavs,
        removeFromFavs,
        isFav,
    };

    return (
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    );
};
