/**
 * Movies Data Module
 * Contains an array of sample movie objects with their details
 * Each movie has: title, description, posterURL, rating, and trailerURL
 */

// Sample movies array with initial data for the application
const movies = [
    // Movie 1: Powerpuff Girls themed movie
    {
      title: "Return of Mojo Jojo",
      description:
        "Mojo Jojo returns to take over Townsville, but the Powerpuff Girls are ready for him.",
      posterURL:
        "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
      rating: 4.5, // High rating for this classic
      trailerURL: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder trailer
    },
    
    // Movie 2: Disney classic animation
    {
      title: "The Lion King",
      description:
        "Simba, a young lion prince, flees his kingdom after tragedy, only to learn the true meaning of bravery.",
      posterURL:
        "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
      rating: 4.9, // Very high rating for this masterpiece
      trailerURL: "https://www.youtube.com/embed/4sj1MT05lAA", // Lion King trailer
    },
    
    // Movie 3: Pixar's first feature film
    {
      title: "Toy Story",
      description:
        "A group of toys come to life when their owner is away, leading to unexpected adventures.",
      posterURL:
        "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
      rating: 4.8, // High rating for this groundbreaking film
      trailerURL: "https://www.youtube.com/embed/4KPTXpQqeo8", // Toy Story trailer
    },
    
    // Movie 4: DreamWorks animated comedy
    {
      title: "Shrek",
      description:
        "An ogre named Shrek sets out to rescue a princess with the help of a talkative donkey.",
      posterURL:
        "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
      rating: 4.7, // High rating for this beloved comedy
      trailerURL: "https://www.youtube.com/embed/CwXOrWvPBPk", // Shrek trailer
    },
    
    // Movie 5: Disney's modern musical
    {
      title: "Frozen",
      description:
        "Princess Anna sets off on a journey to find her sister Elsa, whose icy powers trapped their kingdom in winter.",
      posterURL:
        "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
      rating: 4.6, // High rating for this popular musical
      trailerURL: "https://www.youtube.com/embed/TbQm5doF_Uc", // Frozen trailer
    },
    
    // Movie 6: Sony's innovative animation
    {
      title: "Spider-Man: Into the Spider-Verse",
      description:
        "Teen Miles Morales becomes Spider-Man of his universe and joins others to save the multiverse.",
      posterURL:
        "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
      rating: 4.8, // High rating for this innovative film
      trailerURL: "https://www.youtube.com/embed/g4Hbz2jLxvQ", // Spider-Verse trailer
    },
    
    // Movie 7: Pixar's superhero family
    {
      title: "The Incredibles",
      description:
        "A family of superheroes must hide their powers and live a normal life, until danger calls them back.",
      posterURL:
        "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
      rating: 4.7, // High rating for this family adventure
      trailerURL: "https://www.youtube.com/embed/eZbzbChuaUM", // Incredibles trailer
    },
    
    // Movie 8: Pixar's underwater adventure
    {
      title: "Finding Nemo",
      description:
        "A timid clownfish sets out on a journey to bring his son back home after he's captured by divers.",
      posterURL:
        "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
      rating: 4.8, // High rating for this heartwarming story
      trailerURL: "https://www.youtube.com/embed/2lLJSPH5KzI", // Finding Nemo trailer
    },
    
    // Movie 9: Disney's modern mystery
    {
      title: "Zootopia",
      description:
        "In a city of anthropomorphic animals, a bunny cop and a cynical fox team up to uncover a conspiracy.",
      posterURL:
        "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
      rating: 4.6, // High rating for this clever mystery
      trailerURL: "https://www.youtube.com/embed/jWM0ct-OLsM", // Zootopia trailer
    },
    
    // Movie 10: Pixar's cultural celebration
    {
      title: "Coco",
      description:
        "A young boy named Miguel dreams of becoming a musician and journeys into the Land of the Dead.",
      posterURL:
        "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
      rating: 4.9, // Very high rating for this cultural masterpiece
      trailerURL: "https://www.youtube.com/embed/ga1m0wjzscE", // Coco trailer
    },
  ];
  
// Export the movies array as the default export
export default movies;