import React, { useState } from 'react';
import './App.css';
import Cookies from 'universal-cookie';
import AuthPage from './pages/AuthPage';
import IsGuestOrHostPage from './pages/IsGuestOrHostPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuestPage from './pages/GuestPage';
import HostPage from './pages/HostPage';
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(cookies.get("auth-token"));
  
  return (
    <div className="App">
      {!isAuth ?  <AuthPage setIsAuth={setIsAuth}/>
        : (
          <Router> 
            <Routes>
              <Route path="/party_app" element={<IsGuestOrHostPage/>} />
              <Route path="/party_app/guest" element={<GuestPage/>} />
              <Route path="/party_app/host" element={ <HostPage/>}/>
            </Routes>
          </Router>
        )
      }
  </div>
    
    
  );
}

export default App;
