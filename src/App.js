import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Contact from './components/Contact';
import Navbar from "./components/Navbar"





function App() {
  return (
    <div className="App">
      <Navbar />
       <About />
      <Contact />
    </div>
  );
}

export default App;
