// Import React hooks and components
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import movies from "./data/movies";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDetail from "./components/MovieDetail";

/**
 * Home Component
 * Contains the main movie collection application with search, filter, and add functionality
 */
function Home() {
  // State for managing all movies in the collection
  const [allMovies, setAllMovies] = useState(movies);
  
  // State for search functionality
  const [title, setTitle] = useState("");        // Search by movie title
  const [rating, setRating] = useState("");      // Search by movie rating
  
  // State for adding new movies
  const [newMovie, setNewMovie] = useState({
    title: "",           // Movie title
    description: "",     // Movie description
    posterURL: "",       // URL to movie poster image
    rating: "",          // Movie rating (0-5)
    trailerURL: "",      // URL to movie trailer
  });

  /**
   * Handles adding a new movie to the collection
   * @param {Event} e - Form submission event
   */
  const handleAddNewMovie = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Convert rating to number if provided, default to 0
    const movieToAdd = {
      ...newMovie,
      rating: newMovie.rating ? Number(newMovie.rating) : 0,
    };

    // Add new movie to the beginning of the movies array
    setAllMovies([...allMovies, movieToAdd]);

    // Reset the form to empty values
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
      trailerURL: "",
    });
  };

  return (
    <>
      {/* Header Section - Beautiful gradient header with app title */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">🎬 Movie Collection</h1>
          <p className="header-subtitle">Discover, Search, and Manage Your Favorite Movies</p>
        </div>
      </header>

      {/* Main Content Container - Search and Add Movie sections side by side */}
      <div className="flex justify-between">
        
        {/* Search Section - Allows users to filter movies by title and rating */}
        <div className="search-section">
          <h3 className="section-title">🔍 Search Movies</h3>
          <form onSubmit={(e) => e.preventDefault()} className="search-form">
            {/* Title search input */}
            <div className="form-group">
              <label className="form-label">Title:</label>
              <input
                className="form-input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter movie title..."
              />
            </div>
            
            {/* Rating filter input */}
            <div className="form-group">
              <label className="form-label">Rating (0-5):</label>
              <input
                className="form-input"
                type="number"
                min="0"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="0-5"
              />
            </div>
            
            {/* Search submit button */}
            <button type="submit" className="search-btn">🔍 Search</button>
          </form>
        </div>

        {/* Add Movie Section - Form to add new movies to the collection */}
        <div className="add-movie-section">
          <h3 className="section-title">➕ Add New Movie</h3>
          <form onSubmit={handleAddNewMovie} className="movie-form">
            
            {/* Movie title input */}
            <div className="form-group">
              <label className="form-label">Title:</label>
              <input
                className="form-input"
                type="text"
                value={newMovie.title}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, title: e.target.value })
                }
                placeholder="Enter movie title..."
                required
              />
            </div>
            
            {/* Movie description textarea */}
            <div className="form-group">
              <label className="form-label">Description:</label>
              <textarea
                className="form-textarea"
                value={newMovie.description}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, description: e.target.value })
                }
                placeholder="Enter movie description..."
                required
              />
            </div>
            
            {/* Movie poster URL input */}
            <div className="form-group">
              <label className="form-label">Poster URL:</label>
              <input
                className="form-input"
                type="text"
                value={newMovie.posterURL}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, posterURL: e.target.value })
                }
                placeholder="Enter poster URL..."
                required
              />
            </div>
            
            {/* Movie rating input */}
            <div className="form-group">
              <label className="form-label">Rating (0-5):</label>
              <input
                className="form-input"
                type="number"
                min="0"
                max="5"
                value={newMovie.rating}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, rating: e.target.value })
                }
                placeholder="0-5"
                required
              />
            </div>

            {/* Movie trailer URL input */}
            <div className="form-group">
              <label className="form-label">Trailer URL:</label>
              <input
                className="form-input"
                type="text"
                value={newMovie.trailerURL}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, trailerURL: e.target.value })
                }
                placeholder="Enter trailer URL..."
                required
              />
            </div>
            
            {/* Submit button to add the movie */}
            <button type="submit" className="submit-btn">🎬 Add Movie</button>
          </form>
        </div>
      </div>

      {/* Conditional Rendering - Shows filtered results or all movies */}
      {title || rating ? (
        // If search criteria exist, show filtered results
        <Filter movies={allMovies} title={title} rating={rating} />
      ) : (
        // If no search criteria, show all movies
        <MovieList movies={allMovies} />
      )}
    </>
  );
}

/**
 * Main App Component
 * Sets up React Router and defines the application routes
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
