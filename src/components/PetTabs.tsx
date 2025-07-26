import { useState } from "react";
import type { ReactNode } from "react";

interface PetTabsProps {
  grownContent: ReactNode;
  hatchedContent: ReactNode;
}

const PetTabs: React.FC<PetTabsProps> = ({ grownContent, hatchedContent }) => {
  const [activeTab, setActiveTab] = useState<"grown" | "hatched">("grown");

  return (
    <div className="glass-effect rounded-2xl card-shadow overflow-hidden">
      {/* Tab Headers */}
      <div className="flex bg-white/60 backdrop-blur-sm">
        <button
          onClick={() => setActiveTab("grown")}
          className={`flex-1 flex items-center justify-center px-6 py-4 font-semibold transition-all duration-300 relative ${
            activeTab === "grown"
              ? "text-green-800 bg-gradient-to-r from-green-100 to-emerald-100"
              : "text-gray-800 hover:text-gray-900 hover:bg-white/50"
          }`}
        >
          <span className="flex items-center space-x-2">
            <span className="text-xl">🌱</span>
            <span>Reverse Calculate</span>
          </span>
          {activeTab === "grown" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
          )}
        </button>
        
        <button
          onClick={() => setActiveTab("hatched")}
          className={`flex-1 flex items-center justify-center px-6 py-4 font-semibold transition-all duration-300 relative ${
            activeTab === "hatched"
              ? "text-green-800 bg-gradient-to-r from-green-100 to-emerald-100"
              : "text-gray-800 hover:text-gray-900 hover:bg-white/50"
          }`}
        >
          <span className="flex items-center space-x-2">
            <span className="text-xl">🌼</span>
            <span>Forward Calculate</span>
          </span>
          {activeTab === "hatched" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-white/90 backdrop-blur-sm">
        <div className={`transition-all duration-300 ${activeTab === "grown" ? "opacity-100" : "opacity-0 hidden"}`}>
          {grownContent}
        </div>
        <div className={`transition-all duration-300 ${activeTab === "hatched" ? "opacity-100" : "opacity-0 hidden"}`}>
          {hatchedContent}
        </div>
      </div>
    </div>
  );
};

export default PetTabs;
