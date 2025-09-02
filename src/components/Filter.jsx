// Import the MovieCard component to display individual movies
import MovieCard from "./movieCard";

/**
 * Filter Component
 * Displays filtered movies based on search criteria (title and rating)
 * 
 * @param {Object} props - Component props
 * @param {Array} props.movies - Array of all movies to filter
 * @param {string} props.title - Search term for movie title (case-insensitive)
 * @param {string|number} props.rating - Rating filter (0-5)
 */
const Filter = ({ movies, title, rating }) => {
  // Debug log to check if rating filter is active
  console.log(!!rating);
  
  return (
    <>
      {/* Section header */}
      <h2>Filter</h2>
      
      {/* Container for filtered movie cards with flexbox layout */}
      <div className="flex gap-3 flex-wrap">
        {rating ? (
          // If rating filter is applied, filter by both title AND rating
          movies
            // First filter: Match movie title (case-insensitive)
            .filter((movie) =>
              movie.title.toLowerCase().includes(title.toLowerCase())
            )
            // Second filter: Match exact rating
            .filter((movie) => movie.rating == rating)
            // Map filtered movies to MovieCard components
            .map((movie, index) => <MovieCard key={index} {...movie} index={index} />)
        ) : (
          // If no rating filter, only filter by title
          movies
            // Filter: Match movie title (case-insensitive)
            .filter((movie) =>
              movie.title.toLowerCase().includes(title.toLowerCase())
            )
            // Map filtered movies to MovieCard components
            .map((movie, index) => <MovieCard key={index} {...movie} index={index} />)
        )}
      </div>
    </>
  );
};

export default Filter;