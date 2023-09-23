import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpLogIn from './LoginSign/SignUpLogIn';
import SignUp from './LoginSign/SignUp';
import "./App.css"
import User from "./User/User.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignUpLogIn />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
