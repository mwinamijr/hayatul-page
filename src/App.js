import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ServicesScreen from './screens/ServicesScreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes to="/">
        <Route index element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/contact-us' element={<ContactScreen />} />
        <Route path='/services' element={<ServicesScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
