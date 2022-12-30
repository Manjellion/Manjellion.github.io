import './App.css';
import { Home, About, Project, Pokemon, Footer, Nav } from './Components/export'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Pokemon />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
