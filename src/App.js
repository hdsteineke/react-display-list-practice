import './App.css';
// import your arrays here
import BirdList from './BirdList.js';
import BookList from './BookList.js';


import { birds } from './birds.js';
import { books } from './books.js';

function App() {
  return (
    <div className="App">
      <BirdList birds={birds} />
      <BookList books={books} />
        
    </div>
  );
}

export default App;
