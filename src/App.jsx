import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Ensure this is imported correctly
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Store from "./pages/Store";
import myImage from "./assets/71.png";

function App() {
  return (
    
      <div
        className="text-white bg-center h-full bg-[#02111B]"
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <Navbar />
        {/* Routes go inside the Router */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* Make sure the path is correct */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
   
  );
}

export default App;
