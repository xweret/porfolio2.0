import './App.css';
import Header from './components/header/header';
import Navbar from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';


function App() {
  return (
    <>
      <div className="bg-circle1"></div>  
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
