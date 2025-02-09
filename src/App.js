import './App.css';
import LoadingModal from './Components/Indivaduals/LoadingModal/LoadingModal';
import GameTable from './Components/Sections/GameTable/GameTable';
import GameTitleDiv from './Components/Sections/GameTitleDiv/GameTitleDiv';
import GameTopNav from './Components/Sections/GameTopNav/GameTopNav';

function App() {
  return (
    <>
      <GameTopNav />
      <GameTitleDiv gameTitleText={'winner'} />
      <GameTable />
      {/* <LoadingModal isVisible={true} loadingText={'Done'} /> */}
    </>
  );
}

export default App;
