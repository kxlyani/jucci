import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Collection/>
    </div>
  );
}

export default App;
