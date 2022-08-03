import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import React from "react";
import Notes from "./Pages/Notes/Notes";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Notes />} exact />
            <Route path="/notes" element={<Notes />} exact />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
