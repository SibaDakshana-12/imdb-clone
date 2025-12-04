import React from "react";

// Import local images
import avatarPoster from "../images/posters/avatar1.jpg";
import inceptionPoster from "../images/posters/inception.jpg";
import interstellarPoster from "../images/posters/interstellar.jpg";

function MovieCard({ movie }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-40 h-40 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-1">{movie.title}</h2>
        <p className="text-gray-600">Release Year: {movie.year}</p>
        <p className="text-yellow-600 font-semibold mt-2">
          ⭐ Rating: {movie.rating}
        </p>
      </div>
    </div>
  );
}

export default function MovieCardGallery() {
  const movies = [
    {
      title: "Avatar",
      year: 2009,
      rating: 7.8,
      poster: avatarPoster,
    },
    {
      title: "Inception",
      year: 2010,
      rating: 8.8,
      poster: inceptionPoster,
    },
    {
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      poster: interstellarPoster,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 max-w-6xl mx-auto">
      {movies.map((m, i) => (
        <MovieCard key={i} movie={m} />
      ))}
    </div>
  );
}
