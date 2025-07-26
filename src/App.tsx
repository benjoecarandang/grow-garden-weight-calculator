import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PetCalculator from "./components/PetCalculator";
import "./App.css";
import Footer from "./components/Footer";
import FarmDesignGallery from "./components/FarmDesignGallery";
import TipJar from "./components/TipJar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background with animated elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-blue-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<PetCalculator />} />
              <Route path="/design-ideas" element={<FarmDesignGallery />} />
            </Routes>
          </div>
        </main>

        <TipJar />

        <Footer />
      </div>
    </div>
  );
}

export default App;
