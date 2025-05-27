import { useState } from 'react'
import './App.css'

function App() {
  const [film, setFilm] = useState([
  {title: 'Inception', genre: 'Fantascienza'},
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
  ]);

  return (
   <div></div>
  )
}

export default App
