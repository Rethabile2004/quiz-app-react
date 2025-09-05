import Home from "./components/Home";
import NavBar from "./components/Routes/NavBar";
import Footer from "./components/Routes/Footer"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "/src/components/Quiz/Quiz.jsx";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <NavBar />
        <div style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Quiz" element={<Quiz />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
