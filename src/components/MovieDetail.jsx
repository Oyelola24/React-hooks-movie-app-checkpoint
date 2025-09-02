import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies';

/**
 * MovieDetail Component
 * Displays detailed information about a specific movie including description and trailer
 * Allows navigation back to the home page
 */
const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the movie by index (since we're using array index as ID)
  const movie = movies[parseInt(id)];
  
  // If movie not found, show error message
  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Movie Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with back button */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>

      {/* Movie content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Movie header with poster and basic info */}
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={movie.posterURL} 
                alt={movie.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{movie.title}</h1>
              <div className="flex items-center mb-4">
                <span className="text-2xl text-yellow-500 mr-2">★</span>
                <span className="text-xl font-semibold text-gray-700">{movie.rating}/5</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{movie.description}</p>
            </div>
          </div>

          {/* Trailer section */}
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎬 Watch Trailer</h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={movie.trailerURL}
                title={`${movie.title} Trailer`}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
