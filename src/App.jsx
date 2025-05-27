import { useState } from 'react'
import './App.css'

function App() {
  const [film, setFilm] = useState([
  { title: 'Inception', genre: 'Fantascienza'},
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
  ]);

  return (
   <div>
    <ul>
      {film.map((movie,index) => (
        <li key={index}>{movie.title} - {movie.genre}</li>
      ))}
    </ul>
   </div>
  );
}

export default App
