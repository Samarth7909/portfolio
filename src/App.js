import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Intro from './Components/Intro/Intro';
// import About from './Components/About/About';
// import Projects from './Components/Projects/Projects';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     {/* <About/>
     <Projects/>
     <Contact/>
     <Footer/> */}
    </div>
  );
}

export default App;
