import React from 'react';
import './App.css';
import Banner from './Components/banner';
import Header from './Components/Header'
import SubHeader from './Components/SubHeader'
import Product from './Components/Product'

function App() {

  return (
    
    <div>
      <Header />
      <SubHeader />
      <Banner />
      <Product />
    </div>
  );
}

export default App;
