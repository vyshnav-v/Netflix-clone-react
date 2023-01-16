import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowCard from './Components/RowCard/RowCard';
import { Action, comedy, Documentaries, Horror, orginal, Romance } from './URLS';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowCard url={orginal} title="Netflix Orginals" />
      <RowCard url={Action} title="ActionMovies" isSmall />
      <RowCard url={Horror} title="HorrorMovies" isSmall />
      <RowCard url={Romance} title="RomanceMovies" isSmall />
      <RowCard url={comedy} title="ComedyMovies" isSmall />
      <RowCard url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
