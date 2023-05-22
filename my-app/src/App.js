import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import "./sass/header.scss";
import Header from "./Components/header"
import Home from './Pages/home';
import Login from './Pages/login';
import Profile from './Pages/profile';
import SignUp from './Pages/signup';
// import Footer from "./Components/Footer"
// import Contact from "./Pages/Contact"
// import Dialog from "./Pages/Dialog"
// import Home from "./Pages/Home"
// import Login from "./Pages/Login"
// import Update from "./Pages/Update"
// import Logout from "./Pages/Logout"
// import Wallet from "./Pages/myWallet"
// import SendingMoney from "./Pages/sendingMoney"
// import PrivateRoute from "./Pages/PrivateRoute"
// import ResetPassword from "./Pages/ResetPassword"
// import Profile from "./Pages/Profile"

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
          {/* <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} /> */}
        </Routes>
      </Router>
    </>

  );
}

export default App;