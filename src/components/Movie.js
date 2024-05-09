import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link to={{
            pathname:`/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) =>
                            <li key={index} className="genres_genre">{genre}</li>
                        )}
                    </ul>
                    <p className="movie_summary">{summary.length > 180 ? summary.slice(0, 180) + '...' : summary}</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    geners: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;