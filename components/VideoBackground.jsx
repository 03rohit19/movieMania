/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailorVideo } from "../utils/moviesSlice";

// eslint-disable-next-line react/prop-types
const VideoBackground = ({ movieId }) => {
  const trailorVideo = useSelector((store) => store.movies?.trailorVideo);
  const dispatch = useDispatch();

  // fetch trailor video

  const getMovieVideo = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await res.json();

    const trailor = data.results.filter((video) => video?.type === "Trailer");

    dispatch(addTrailorVideo(trailor));
  };

  useEffect(() => {
    getMovieVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      {trailorVideo && trailorVideo.length > 0 && (
        <iframe
          className="w-full aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailorVideo[1].key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
