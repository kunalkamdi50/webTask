import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './components/page';
import About from './components/about';
import Contact from './components/contact';
import Profile from './components/profile';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Page/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/contact' element={< Contact />} />
      <Route path='/about' element={< About />} />
      </Routes>
  </Router>
  );
}

export default App;
