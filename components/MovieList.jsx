/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

// eslint-disable-next-line react/prop-types, no-unused-vars
const MovieList = ({ title, movies = [] }) => {
  console.log(movies);
  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl py-6 font-bold text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
