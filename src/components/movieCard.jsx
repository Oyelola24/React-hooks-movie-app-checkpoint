import { useNavigate } from 'react-router-dom';

/**
 * MovieCard Component
 * Displays individual movie information in a card format
 * Clicking on the card navigates to the movie detail page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Movie title (defaults to "No Title")
 * @param {string} props.description - Movie description (defaults to "No description")
 * @param {string} props.posterURL - URL to movie poster image (defaults to placeholder image)
 * @param {number} props.rating - Movie rating (defaults to 0.0)
 * @param {number} props.index - Index of the movie in the array (used for routing)
 */
const MovieCard = ({
    title = "No Title",           // Default title if none provided
    description = "No description", // Default description if none provided
    posterURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OFdYEiUBHCvCWNHWq5OeMX0nh7P5sdviSg&s", // Default placeholder image
    rating = 0.0,                 // Default rating if none provided
    index = 0,                    // Index for routing
  }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/movie/${index}`);
    };

    return (
      // Main card container with border, fixed width, and clickable styling
      <div 
        className="border rounded w-[200px] cursor-pointer hover:shadow-lg transition-shadow duration-200 hover:scale-105"
        onClick={handleClick}
      >
        
        {/* Poster image container with fixed height and overflow handling */}
        <div className="w-full h-32 overflow-hidden flex justify-center items-center">
          <img src={posterURL} alt="" className="w-full" />
        </div>
        
        {/* Movie information section with padding */}
        <div className="p-1">
          {/* Movie title - large, bold text with line clamping */}
          <p className="text-xl font-bold line-clamp-1">{title}</p>
          
          {/* Movie description - with line clamping and fixed height */}
          <p className=" line-clamp-2 h-[2lh]">{description}</p>
          
          {/* Movie rating - right-aligned, bold text */}
          <p className="text-end font-bold">{rating}</p>
        </div>
      </div>
    );
  };
  
export default MovieCard;