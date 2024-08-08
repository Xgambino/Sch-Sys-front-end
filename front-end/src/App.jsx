import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; 
import LogIn from "./pages/LogIn";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LogIn />} /> */}
        <Route path="/" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;