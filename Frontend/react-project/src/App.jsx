import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NavBar from "./Navbar component/Navbar";

function App() {
  return (
    <>
      <NavBar />

      <div
        style={{
          width: "1400px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
