import React from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { MovieCard } from "../components/MovieCard";


function RootPage() {
    const moviesListRedux = useSelector((store) => (store.app.movies || []));
    const renderCard = () => {

        const moviesList = moviesListRedux;

        if (moviesList.length === 0) {
            return null;
        }

        return moviesList.map((item) =>{

            const {
                id,
                name = "",
                url = "",
                image = {},
                summary,
                premiered,
            } = item.show || {};

            return <MovieCard
                key = { id }
                id = { id }
                name = { name }
                url = { url }
                image = { image.medium }
                summary = { summary }
                premiered = { premiered }
            />
        });
    }

    return (
        <div className="root_card">
            {
                renderCard()
            }
        </div>
    );
}

RootPage.propTypes = {
    moviesList: PropTypes.array,
};

RootPage.defaultTypes = {
    moviesList: [],
}

export default RootPage;