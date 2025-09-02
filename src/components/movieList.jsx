// src/components/MovieList.jsx
// Import the MovieCard component to display individual movies
import MovieCard from "./MovieCard";

/**
 * MovieList Component
 * Displays all movies in a grid layout using MovieCard components
 * 
 * @param {Object} props - Component props
 * @param {Array} props.movies - Array of movie objects to display
 */
const MovieList = ({ movies }) => {
  return (
    <>
      {/* Section header */}
      <h2>All Movies</h2>
      
      {/* Container for movie cards with flexbox layout */}
      <div className="flex gap-3 flex-wrap">
        {/* Map through all movies and render each as a MovieCard */}
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
