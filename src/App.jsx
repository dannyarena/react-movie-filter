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
  const [filmFiltrati, setFilmFiltrati] = useState([film]);
  const [titoloCercato, setTitoloCercato] = useState("");

  // usiamo useEffect per controllare se l'utente ha scelto un genere, filtrare e aggiornare la UI
  useEffect(() => {
    const filmFiltratiPerCondizione = film.filter((movie) => {
      const condizioneGenere = 
      genereSelezionato === "" || movie.genre === genereSelezionato;

      const condizioneTitolo = 
      movie.title.toLowerCase().includes(titoloCercato.toLowerCase());

      return condizioneGenere && condizioneTitolo;
    });
    setFilmFiltrati(filmFiltratiPerCondizione);
  }, [genereSelezionato, titoloCercato, film]
);

  return (
    <>
    <input type="text"
    placeholder='Cerca per titolo'
    value={titoloCercato}
    onChange={(e) => setTitoloCercato(e.target.value)} 
    />

      {/* select che salva il valore su setGenereSelezionato */}
   <div>   
    <select onChange={(e) => setGenereSelezionato(e.target.value)}>
      <option value="">Tutti i generi</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option>
    </select>
      
    <ul>
      {filmFiltrati.map((movie,index) => (
        <li key={index}>{movie.title} - {movie.genre}</li>
      ))}
    </ul>
   </div>
   </>
  );
}

export default App
