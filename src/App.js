import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import NavBar from './components/nav/NavBar';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
