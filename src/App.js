import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import WeddingInvitation from "./components/WeddingInvitation";
import AdminPanel from "./components/AdminPanel";
import { useEffect } from "react";
import './App.css';
function App() {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeddingInvitation />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>

  );
}

export default App;
