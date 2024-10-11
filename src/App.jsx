import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Ensure this is imported correctly
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import Store from "./pages/Store";
import myImage from "./assets/71.png";
import Article from "./pages/Articles";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Offers from "./Components/Offers";
import Create from "./Components/Create";
// import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <div
        className="text-white bg-center h-full  bg-[#02111B]"
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/article" element={<Article />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Menu />
      <Offers />
      <Create />

    </>
  );
}

export default App;
