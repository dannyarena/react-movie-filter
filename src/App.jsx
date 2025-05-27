import { useState, useEffect } from 'react'
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

  const [genereSelezionato, setGenereSelezionato] = useState("");
  const [filmFiltrati, setFilmFiltrati] = useState(film);
  useEffect(() => {
    if(genereSelezionato === "") {
      setFilmFiltrati(film);
    } else {
      const filmFiltratiPerGenere = film.filter((movie) => movie.genre === genereSelezionato);
      setFilmFiltrati(filmFiltratiPerGenere);
    }
  }, [genereSelezionato, film]);

  return (
      // select che salva il valore su setGenereSelezionato
   <div>   
    <select onChange={(e) => setGenereSelezionato(e.target.value)}>
      <option value="">Tutti i generi</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option>
    </select>

    <ul>
      {film.map((movie,index) => (
        <li key={index}>{movie.title} - {movie.genre}</li>
      ))}
    </ul>
   </div>
  );
}

export default App
