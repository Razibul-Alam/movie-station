
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/movie/:movieId" element={<MovieDetails/>}/>
      <Route path="/" element={<Movies/>}/>
      </Routes>
      </Router> 
  );
}

export default App;