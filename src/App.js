import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from "./routes";
import { Navigation } from "./components/Nagigation";

import "./App.css";

// import Header from "./components/layout/Header";
// import SignUp from "./components/Form/SignUp";

function App() {
  return (
    <Router>
      <div className="bg-white p-20">
        <Routes />
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
