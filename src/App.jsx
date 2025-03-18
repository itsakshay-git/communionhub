import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Events from "./Pages/Event";
import About from "./Pages/About";

function App() {

  useEffect(() => {
    gsap.from(".fade-in", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
  }, []);

  return (
    <Router>
      <div className="bg-black min-h-screen pb-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  )
}

export default App
