import './App.css';
import Header from './components/header';
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
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
