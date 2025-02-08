import './App.css';
import LoadingModal from './Components/Indivaduals/LoadingModal/LoadingModal';
import GameTable from './Components/Sections/GameTable/GameTable';
import GameTopNav from './Components/Sections/GameTopNav/GameTopNav';

function App() {
  return (
    <>
      <GameTopNav />
      <GameTable />
      <LoadingModal isVisible={false} />
    </>
  );
}

export default App;
