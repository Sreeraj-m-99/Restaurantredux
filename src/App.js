// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'; 
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewHotel from './components/ViewHotel'


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        
      <Routes>
        <Route
        path='/' 
        element={   <Hero />}
        />
        
        <Route
        path='/view-hotel/:id'
         element={   <ViewHotel/>}
        />
        
       
         
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
