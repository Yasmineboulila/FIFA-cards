import logo from './logo.svg';
import './App.css';
import Players from './players'
import PlayersList from './playersList';

function App(players) {
  return (
    <div className="App">
     <PlayersList players={players}/>
    </div>
  );
}

export default App;
