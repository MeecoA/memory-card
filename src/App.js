import "./App.css";
import MemoryCard from "./components/MemoryCard";
import Header from "./components/Header";
import bg from "./components/images/bg.jpg";
function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <Header />
      <MemoryCard />
    </div>
  );
}

export default App;
