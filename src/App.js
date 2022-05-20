
import { Accueil } from './Accueil';
import { Planet } from './Planet';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/:planet" element={<Planet />} />
    </Routes>
  );
}
export default App;
