// eslint-disable-next-line react/prop-types
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-20 md:pt-60 px-4 md:px-12  aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="py-2 md:py-6 text-sm md:text-lg w-full md:w-[45%]">
        {overview}
      </p>
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 md:gap-y-0">
        <button className="bg-white text-black p-2 px-4 md:px-12 text-sm md:text-xl hover:bg-opacity-80 border rounded-lg">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-black p-2 px-4 md:px-12 text-sm md:text-xl bg-opacity-50 border rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
