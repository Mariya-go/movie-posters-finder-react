import PropTypes from "prop-types";
import { useState } from "react";

import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import "./Movie.css";
import image from "../assets/Qo5mfYDE5v-350.avif";

const Movie = ({ movieData }) => {
  const [likeHeart, setLikeHeart] = useState(false);

  const clickLikeHandler = () => {
    setLikeHeart((prevLikeHeart) => !likeHeart);
  };
  return (
    <div className={`movie-container ${likeHeart ? "liked" : "un-liked"}`}>
      <h2>{movieData.Title}</h2>
      <div className="date">
        <BsCalendarDate color="white" size={25} />
        <p>{movieData.Year}</p>
      </div>

      <img
        src={movieData.Poster === "N/A" ? image : movieData.Poster}
        alt={movieData.Title}
      />
      <button onClick={clickLikeHandler} className="like-heart">
        <AiOutlineHeart color={likeHeart ? "red" : "white"} size={27} />
      </button>
    </div>
  );
};

Movie.propTypes = {
  film: PropTypes.array,
};

export default Movie;
