import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieRecommendations } from "../hooks/MovieRecommendation"

const MoreDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aiMovieRecommendations, setAiMovieRecommendations] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (movie) {
      getMovieRecommendations(movie.name, movie.network?.name || "Unknown", movie.genres.join(', '))
        .then(setAiMovieRecommendations)
        .catch((err) => {
          console.error("AI Recommendation Error:", err);
        });
    }
  }, [movie]);

  if (loading) return <h1>Loading...</h1>;
  if (!movie) return <h1>No Data Found</h1>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
        Back to Home
      </button>
      <h1>{movie.name}</h1>

      {movie.image?.original && (
        <img
          src={movie.image.original}
          alt={movie.name}
          style={{ width: '300px', borderRadius: '8px' }}
        />
      )}

      <p><strong>Premiered:</strong> {movie.premiered || 'N/A'}</p>
      <p><strong>Ended:</strong> {movie.ended || 'N/A'}</p>
      <p><strong>Status:</strong> {movie.status}</p>
      <p><strong>Language:</strong> {movie.language}</p>
      <p><strong>Genres:</strong> {movie.genres?.join(', ') || 'N/A'}</p>
      <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
      <p><strong>Average Runtime:</strong> {movie.averageRuntime} minutes</p>
      <p><strong>Schedule:</strong> {movie.schedule?.days?.join(', ')} at {movie.schedule?.time}</p>
      <p><strong>Type:</strong> {movie.type}</p>
      <p><strong>Rating:</strong> {movie.rating?.average || 'N/A'}</p>
      <p><strong>Network:</strong> {movie.network?.name || 'N/A'} ({movie.network?.country?.name || 'N/A'})</p>
      <p><strong>Official Site:</strong> <a href={movie.officialSite} target="_blank" rel="noreferrer">{movie.officialSite}</a></p>
      <p><strong>IMDB:</strong> {movie.externals?.imdb ? (
        <a href={`https://www.imdb.com/title/${movie.externals.imdb}`} target="_blank" rel="noreferrer">
          {movie.externals.imdb}
        </a>
      ) : 'N/A'}</p>
      <div dangerouslySetInnerHTML={{ __html: movie.summary }} />

      <h2>🎬 AI Recommendations</h2>
      {aiMovieRecommendations.length > 0 ? (
        <ul>
          {aiMovieRecommendations.map((rec, index) => (
            <li key={index}>
              <strong>{rec.title}</strong> by {rec.author || 'Unknown'}
            </li>
          ))}
        </ul>
      ) : (
        <p> No AI recommendations yet.</p>
      )}
    </div>
  );
};

export default MoreDetails;
