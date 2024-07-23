import logo from './logo.svg';
import './App.css';
import Login from './Loginpg/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Loginpg from './Loginpg/Login';
import Register from './Signuppg/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpg/>} />
        <Route path='/Signup' element={<Register/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
