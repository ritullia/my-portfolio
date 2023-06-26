import "./App.css";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { MainPage } from "./components/MainPage";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contacts />} path="/contacts" />
      </Routes>
    </>
  );
}

export default App;
