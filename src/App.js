import logo from './logo.svg';
import './App.css';
import players from './players'
import PlayersList from './playersList';

function App() {
  return (
    <div className="App">
     <PlayersList players={players}/>
    </div>
  );
}

export default App;
