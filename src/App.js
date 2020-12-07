import './App.css';
import Header from './components/header/header';
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
