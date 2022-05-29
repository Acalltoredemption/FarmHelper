import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from "./components/Header";
import { ResultProvider } from "./context/ResultContext";
import './index.css'
import './app.css'
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import About from './pages/About';

function App() {
  return (
    
    <ResultProvider>
      <Router>
      <Header />
    <div className="min-h-screen px-6 py-8 mx-auto bg-gray-100">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/calculator' element={<Calculator />} />
      </Routes>
    </div>
    </Router>
    </ResultProvider>

  );
}

export default App;
