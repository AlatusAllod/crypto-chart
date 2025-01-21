import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoList from './pages/CryptoList';
import CryptoDetails from './pages/CryptoDetails';
import DevNotes from './pages/DevNotes';

const App = () => (
  <Router basename="/crypto-chart/">
    <Routes>
      <Route path="/" element={<CryptoList />} />
      <Route path="/dev-notes" element={<DevNotes />} />
      <Route path="/:symbol" element={<CryptoDetails />} />
    </Routes>
  </Router>
);

export default App;