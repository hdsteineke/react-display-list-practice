import './App.css';
// import your arrays here
import BirdList from './BirdList.js';
import BookList from './BookList.js';
import MusicianList from './MusicianList.js';

import { birds } from './birds.js';
import { books } from './books.js';
import { musicians } from './musicians.js';

function App() {
  return (
    <div className="App">
      <BirdList birds={birds} />
      <BookList books={books} />
      <MusicianList musicians={musicians} />
    </div>
  );
}

export default App;
