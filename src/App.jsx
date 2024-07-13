import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Concact";
import NewsAndEvents from "./pages/NewsAndEvents";
import StudentLife from "./pages/StudentLife";
import About from "./pages/About";

function App() {
  return (
    <div className="h-screen min-h-screen w-screen bg-blue-50">
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/news-and-events" element={<NewsAndEvents />} />
        <Route path="/student-life" element={<StudentLife />} />
      </Routes>
    </div>
  );
}

export default App;
