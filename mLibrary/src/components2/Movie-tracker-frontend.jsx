import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieTrackerFrontend = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortTitle, setSortTitle] = useState('');
  const [sortRating, setSortRating] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.slice(0, 20));
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  const sortMovies = (type, order) => {
    const sorted = [...movies];
    if (type === 'title') {
      sorted.sort((a, b) => {
        if (a.name < b.name) return order === 'asc' ? -1 : 1;
        if (a.name > b.name) return order === 'asc' ? 1 : -1;
        return 0;
      });
    } else if (type === 'rating') {
      sorted.sort((a, b) => {
        const aRating = a.rating?.average || 0;
        const bRating = b.rating?.average || 0;
        return order === 'asc' ? aRating - bRating : bRating - aRating;
      });
    }
    setMovies(sorted);
  };

  const handleTitleSort = (e) => {
    const value = e.target.value;
    setSortTitle(value);
    if (value === 'titleA-Z') sortMovies('title', 'asc');
    else if (value === 'titleZ-A') sortMovies('title', 'desc');
  };

  const handleRatingSort = (e) => {
    const value = e.target.value;
    setSortRating(value);
    if (value === 'ratingL-H') sortMovies('rating', 'asc');
    else if (value === 'ratingH-L') sortMovies('rating', 'desc');
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>🎬 MovieTracker</h1>
       <button onClick={()=>{navigate("/addNewMovie")}} style={{ marginBottom: '20px' }}>
        Add new movie 
      </button>
      <div style={{ marginBottom: '20px' }}>
        <select value={sortTitle} onChange={handleTitleSort}>
          <option value="">Sort by: Title</option>
          <option value="titleA-Z">Title: A-Z</option>
          <option value="titleZ-A">Title: Z-A</option>
        </select>

        <select value={sortRating} onChange={handleRatingSort} style={{ marginLeft: '10px' }}>
          <option value="">Sort by: Rating</option>
          <option value="ratingL-H">Rating: Low to High</option>
          <option value="ratingH-L">Rating: High to Low</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {movies.map((movi) => (
          <div key={movi.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <p><strong>{movi.name}</strong> ({movi.premiered || 'Unknown'})</p>
            <p><strong>Genres:</strong> {movi.genres.join(', ') || 'N/A'}</p>
            <p><strong>Rating:</strong> {movi.rating?.average || 'N/A'}</p>
            <p><strong>Language:</strong> {movi.language}</p>
            {movi.image?.medium && (
              <img src={movi.image.medium} alt={movi.name} style={{ width: '150px' }} />
            )}
            <div>
              <button onClick={() => navigate(`/moreDetails/${movi.id}`)}>More Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieTrackerFrontend;
