import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <>
      {movies.nowPlayingMovies && (
        <div className="bg-black ">
          <div className="-mt-72 relative z-20 pl-5">
            <MovieList
              title={"Now Playing"}
              movies={movies?.nowPlayingMovies}
            />

            <MovieList title={"Popular"} movies={movies?.popularMovies} />
            <MovieList title={"Top-Rated"} movies={movies?.topRatedMovies} />
            <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
          </div>
        </div>
      )}
    </>
  );
};

export default SecondaryContainer;
