import { useEffect, useState } from "react";
import Movie from "./Movie";
import "./MovieList.css";
import PropTypes from "prop-types";
import axios from "axios";
import Loader from "./Loader";

const MovieList = ({ searchQuery }) => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_API_KEY
          }&s=${searchQuery}&page=1`
        );

        if (res.status === 200) {
          if (res.data.Search) {
            setError("");
            setMovie(res.data.Search);
          } else {
            setError(res.data.Error);
          }
        } else {
          throw new Error(`Failed to axios with status: ${res.status}`);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoader(false);
      }
    };
    getMovies();
  }, [searchQuery]);

  return (
    <div className="movie-list">
      {loader && <Loader />}
      {error && <div>{error}</div>}
      {!error &&
        movie.map((movieData, index) => (
          <Movie key={index} movieData={movieData} />
        ))}
    </div>
  );
};

MovieList.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default MovieList;
