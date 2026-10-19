import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import JarPage from "./pages/JarPage";
import MissionPage from "./pages/MissionPage";
import GalleryPage from "./pages/GalleryPage";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<JarPage />} />
        <Route path="/Mission" element={<MissionPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}