import React from 'react';
import Header from './app/Header/Header'
import Page from './app/Page/Page';
import Footer from './app/Footer/Footer'

const App = () => (
  <div class="main">
    <div class="container">
      <Header/>     
      <Page/>
      <Footer/>
    </div>
  </div>
);

export default App;