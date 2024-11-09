// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Evenement from './Evenement';
import Expert from './Expert.jsx';
import Formulaire from './Formulaire.jsx';
import Expert2 from './Expert2.jsx';
import Navbar from './Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Evenement />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/expert2" element={<Expert2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
