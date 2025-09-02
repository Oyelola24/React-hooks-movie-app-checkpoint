# Movie Collection App

A React application for managing and searching through a collection of movies. Built with modern CSS styling and responsive design.

## Features

- **Search Movies**: Filter movies by title and rating
- **Add New Movies**: Add movies with title, description, poster URL, and rating
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient header and card-based layout

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open `http://localhost:5173` in your browser

### Build
Run `npm run build` to create a production build.

## Project Structure

```
src/
├── components/
│   ├── Filter.jsx      # Search and filter component
│   ├── movieCard.jsx   # Individual movie card
│   └── MovieList.jsx   # List of all movies
├── data/
│   └── movies.jsx      # Sample movie data
├── App.jsx             # Main app component
├── App.css             # Component styles
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Usage

### Searching Movies
- Use the search section on the left
- Type a movie title to filter results
- Optionally select a rating (0-5) for additional filtering
- Results update in real-time

### Adding Movies
- Use the "Add New Movie" section on the right
- Fill in all required fields:
  - Title
  - Description
  - Poster URL
  - Rating (0-5)
- Click "Add Movie" to save

### Viewing Movies
- All movies display when no search is active
- Filtered results show based on search criteria
- Each movie displays in a card with poster, title, description, and rating

## Styling

The app features:
- Gradient header with blue-to-purple colors
- Card-based layout with hover effects
- Responsive design for all screen sizes
- Smooth animations and transitions
- Modern button designs with hover states

## Technologies Used

- React 18
- Vite
- CSS3 with Flexbox
- Modern CSS features (gradients, shadows, animations)

## Customization

The modular structure makes it easy to:
- Add new search filters
- Modify the color scheme
- Add new movie metadata fields
- Enhance animations and effects

## Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.
