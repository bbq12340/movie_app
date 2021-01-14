import react from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
    return (
    <Link to= {{
        pathname: `/movie/${id}`,
        state: {
            year,
            title,
            summary,
            poster,
            genres
        }
    }}>
        <div className="movie" class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <img src={poster} alt={title} title={title} class="h-48 w-full object-cover"/>
            <div className="movie_data" class="p-8">
                <h3 className="movie_title" class="tracking-wide text-indigo-500 font-semibold text-5xl">{title}</h3>
                <ul className="genres leading-none">{genres.map((genre, index) => (
                    <li key={index} className="generes_genre" class="text-black mt-2 text-xs">{genre}</li>
                ))}</ul>
                <h5 className="movie_year" class="italic">{year}</h5>
                <p className="movie_summary">{summary.slice(0,140)}...</p> 
            </div>
        </div>
    </Link>
        )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;