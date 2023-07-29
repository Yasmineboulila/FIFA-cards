import logo from './logo.svg';
import './App.css';
import players from './player'
import playersList from './playersList';

function App() {
  return (
    <div className="App">
     <playerList players={players}/>
    </div>
  );
}

export default App;
