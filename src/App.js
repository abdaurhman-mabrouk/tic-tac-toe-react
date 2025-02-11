import React from 'react';
import { createContext, useContext, useState } from 'react';
import './App.css';
import LoadingModal from './Components/Indivaduals/LoadingModal/LoadingModal';
import GameTable from './Components/Sections/GameTable/GameTable';
import GameTitleDiv from './Components/Sections/GameTitleDiv/GameTitleDiv';
import GameTopNav from './Components/Sections/GameTopNav/GameTopNav';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider>
      <GameTopNav />
      <GameTitleDiv />
      <GameTable />
      {/* <LoadingModal isVisible={true} loadingText={'Done'} /> */}
    </ThemeContext.Provider>
  );
}
export { ThemeContext };
export default App;
