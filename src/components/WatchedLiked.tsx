import { useState } from "react";

const WatchedLiked = () => {
  const [watched, setWatched] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleWatched = () => {
    setWatched(!watched);
    if (watched) {
      setLiked(false); //if the user unclicks watched, the show becomes unliked
    }
  };

  const handleLiked = () => {
    if (watched) {
      setLiked(!liked);
    }
  };

  return (
    <div className="watched flex justify-evenly gap-2 mx-4">
      <button
        onClick={handleWatched}
        className={`btn flex-grow max-w-[75%] rounded-custom text-xl ${
          watched
            ? "btn-primary text-secondary font-bold"
            : "btn-secondary text-primary"
        }`}
      >
        {watched ? "Watched" : "Watched?"}
      </button>
      <button
        onClick={handleLiked}
        className={`btn btn-secondary rounded-custom ${
          watched
            ? liked
              ? "text-accent2"
              : "text-primary"
            : "cursor-inactive opacity-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={watched ? (liked ? "currentColor" : "none") : "none"}
          viewBox="0 0 24 24"
          className="inline-block h-6 w-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default WatchedLiked;