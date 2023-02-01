import './App.css';
import MemoryCard from './components/MemoryCard';
function App() {
  return (
    <div className="App">
      <h1>VALORANT AGENT MEMORY GAME</h1>
      <h2>Click on agents to score, don't click the same agent twice.</h2>
      <MemoryCard />
    </div>
  );
}

export default App;
