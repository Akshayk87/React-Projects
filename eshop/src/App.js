import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './Checkout.js';
import Login from './Login.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;