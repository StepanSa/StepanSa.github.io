import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from 'react';
// import './App.css';
// import "./sass/header.scss";
import Header from "./Components/header"
import Home from './Pages/home';
import Login from './Pages/login';
import Profile from './Pages/profile';
import SignUp from './Pages/signup';
import EventsPage from './Pages/events';
import MyTicketsPage from "./Pages/mytickets";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/mytickets" element={<MyTicketsPage />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;