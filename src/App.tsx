import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import TimeLine from './components/TimeLine';
import Work from './components/Work';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Work/>
      <Skills/>
      <TimeLine/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
