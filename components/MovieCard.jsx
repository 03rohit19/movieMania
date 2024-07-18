/* eslint-disable react/prop-types */
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <>
      <div className="w-40 pr-4 ">
        <img alt="Movie poster" src={IMG_CDN + posterPath} />
      </div>
    </>
  );
};

export default MovieCard;
