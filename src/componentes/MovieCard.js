import React from 'react';

function MovieCard({ movie, isLoggedIn, hasSubscription, hasVoucher }) {
  const canAccess = isLoggedIn && (hasSubscription || hasVoucher);

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.year} | {movie.genre}</p>
      {canAccess ? (
        <button>Assistir</button>
      ) : (
        <button className="disabled">Acesso negado</button>
      )}
    </div>
  );
}

export default MovieCard;
