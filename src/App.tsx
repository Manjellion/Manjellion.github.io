import './App.css';
import { Home, About, Project, Pokemon, Footer } from './Components/export'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Pokemon />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
