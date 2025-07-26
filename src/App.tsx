import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PetCalculator from "./components/PetCalculator";
import "./App.css";
import Footer from "./components/Footer";
import FarmDesignGallery from "./components/FarmDesignGallery";

function App() {
  return (
    <main className="min-h-screen bg-[#A2D2FF] px-4 py-6 flex flex-col justify-between">
      <Navbar />

      <Routes>
        <Route path="/" element={<PetCalculator />} />
        <Route path="/design-ideas" element={<FarmDesignGallery />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
