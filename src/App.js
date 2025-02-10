import React from 'react';
import { createContext, useContext } from 'react';
import './App.css';
import LoadingModal from './Components/Indivaduals/LoadingModal/LoadingModal';
import GameTable from './Components/Sections/GameTable/GameTable';
import GameTitleDiv from './Components/Sections/GameTitleDiv/GameTitleDiv';
import GameTopNav from './Components/Sections/GameTopNav/GameTopNav';

export const AppContext = createContext();

function App() {
  return (
    <>
      <AppContext.Provider value={'AppContextValue'}>
        <GameTopNav />
        <GameTitleDiv />
        <GameTable />
        {/* <LoadingModal isVisible={true} loadingText={'Done'} /> */}
      </AppContext.Provider>
    </>
  );
}

export default App;
