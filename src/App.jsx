import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Uxui from './pages/Uxui'
import Brand from './pages/Brand'
import Store from "./pages/Store";
import Article from "./pages/Articles";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Motion from './pages/Motion'
import Grapic from './pages/Graphic'

// components 
import Offers from "./Components/Offers";
import Create from "./Components/Create";
import Navbar from "./Components/Navbar";

//images
import myImage from "./assets/71.png";






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
          <Route path="/uxui" element={<Uxui />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/grapic" element={<Grapic />} />
          <Route path="/motion" element={<Motion />} />

        </Routes>
      </div>
      <Menu />
      <Offers />
      <Create />

    </>
  );
}

export default App;
