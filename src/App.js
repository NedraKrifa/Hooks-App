import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Compte from "./components/pages/Compte";
import Navbar from "./components/layout/Navbar";
import MyProvider from "./components/contexts/MyProvider";
import "./App.css";

function App() {
  return (
    <Router>
      <MyProvider>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={(props) => <Home />} />
          <Route exact path="/compte" render={(props) => <Compte />} />
        </div>
      </MyProvider>
    </Router>
  );
}

export default App;
