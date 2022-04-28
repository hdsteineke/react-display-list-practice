import './App.css';
// import your arrays here
import BirdList from './BirdList.js';
import { birds } from './birds.js';

function App() {
  return (
    <div className="App">
      <BirdList birds={birds}/>
        
    </div>
  );
}

export default App;
