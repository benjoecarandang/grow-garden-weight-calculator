import { Heart, Coffee, Leaf } from "lucide-react";
import QRBPI from "../assets/QRBpi.jpg";
import QRCash from "../assets/QRGcash.jpg";

export default function TipJar() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <section className="glass-effect card-shadow rounded-2xl mx-auto p-8 w-full max-w-7xl">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl">
              <Coffee className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Tip Jar
            </h2>
          </div>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Love what’s growing here? Help this garden thrive! Your support
            keeps the soil rich and the ideas blooming. 🌱
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* GCash */}
          <div className="glass-effect card-shadow rounded-xl p-6 flex flex-col items-center group transition-all duration-200 hover:card-shadow-hover">
            <img
              src={QRCash}
              alt="GCash QR Code"
              className="w-50 h-50 object-contain mb-3 rounded-lg border border-gray-200 shadow-sm"
            />
            <span className="text-base font-semibold text-gray-900 flex items-center gap-1">
              <Leaf className="w-4 h-4 text-green-500" /> GCash
            </span>
          </div>

          {/* BPI */}
          <div className="glass-effect card-shadow rounded-xl p-6 flex flex-col items-center group transition-all duration-200 hover:card-shadow-hover">
            <img
              src={QRBPI}
              alt="BPI QR Code"
              className="w-50 h-50 object-contain mb-3 rounded-lg border border-gray-200 shadow-sm"
            />
            <span className="text-base font-semibold text-gray-900 flex items-center gap-1">
              <Leaf className="w-4 h-4 text-green-500" /> BPI
            </span>
          </div>

          {/* PayPal */}
          <div className="glass-effect card-shadow rounded-xl p-6 flex flex-col items-center justify-center group transition-all duration-200 hover:card-shadow-hover">
            <Heart className="text-pink-500 w-8 h-8 mb-3 animate-pulse-slow" />
            <a
              href="https://paypal.me/benjoecarandang"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-white font-semibold px-6 py-3 rounded-xl mt-2 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Tip via PayPal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
