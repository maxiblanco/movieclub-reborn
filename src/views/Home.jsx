import React, {useEffect} from 'react';
// Components
import Home from '/components/Home';

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;
const discoverURL = `${apiUrl}3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2020`;
const url =
    process.env.ENV === 'development'
        ? process.env.CORS_PROXY + discoverURL
        : discoverURL;

const HomeView = () => {
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                return data;
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, []);

    return <Home />;
};

export default HomeView;
