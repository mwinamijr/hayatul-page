import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />

      <Footer />
    </Router>
  );
}

export default App;
