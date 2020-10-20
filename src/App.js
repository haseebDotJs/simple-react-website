import React, { useState } from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Navbar from './components/nav'
import Main from './components/main'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Achieve from './components/achievements/achieve'


function App() {
  const home = <Home/>;
  const about = <About/>;
  const contact = <Contact/>;
  const achievements = <Achieve/>
  const [data,setData] = useState(home)
  const settingMainPage = (e) => {
     let btn = e.target.innerHTML.toLowerCase()
     let page = (btn === 'home' && home) || (btn === 'about' && about) || (btn === 'contact' && contact) || (btn === 'achievements' && achievements)
     setData(page)
  }
  return (
    <div className="App">
      <Header nav={<Navbar>
        <div className="logo">
          <h1>Abdul Haseeb</h1>
        </div>
        <div className="navbar-options">
          <li onClick={settingMainPage}>Home</li>
          <li onClick={settingMainPage}>About</li>
          <li onClick={settingMainPage}>Contact</li>
          <li onClick={settingMainPage}>Achievements</li>
        </div>
      </Navbar>}
        main={<Main display={data} />} />
      <Footer text='Copyright-2020' />
    </div>
  );
}

export default App;
