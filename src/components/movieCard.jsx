/**
 * MovieCard Component
 * Displays individual movie information in a card format
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Movie title (defaults to "No Title")
 * @param {string} props.description - Movie description (defaults to "No description")
 * @param {string} props.posterURL - URL to movie poster image (defaults to placeholder image)
 * @param {number} props.rating - Movie rating (defaults to 0.0)
 */
const MovieCard = ({
    title = "No Title",           // Default title if none provided
    description = "No description", // Default description if none provided
    posterURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OFdYEiUBHCvCWNHWq5OeMX0nh7P5sdviSg&s", // Default placeholder image
    rating = 0.0,                 // Default rating if none provided
  }) => {
    return (
      // Main card container with border and fixed width
      <div className="border rounded w-[200px]">
        
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