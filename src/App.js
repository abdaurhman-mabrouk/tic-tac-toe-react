import './App.css';
import LodingBar from './Components/Indivaduals/LoadingBar/LodingBar';
import GameTable from './Components/Sections/GameTable/GameTable';
import GameTopNav from './Components/Sections/GameTopNav/GameTopNav';

function App() {
  return (
    <>
      <GameTopNav />
      <GameTable />
      <LodingBar />
    </>
  );
}

export default App;
