import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import PesanKamar from './pages/PesanKamar';
import AdminDashboard from './pages/AdminDashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pesankamar' element={<PesanKamar/>} />
        <Route path='/admin' element={<AdminDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;