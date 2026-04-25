import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
// Hapus import Navbar lama jika tidak dipakai

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;