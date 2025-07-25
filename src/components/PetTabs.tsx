import { useState } from "react";
import type { ReactNode } from "react";

interface PetTabsProps {
  grownContent: ReactNode;
  hatchedContent: ReactNode;
}

const PetTabs: React.FC<PetTabsProps> = ({ grownContent, hatchedContent }) => {
  const [activeTab, setActiveTab] = useState<"grown" | "hatched">("grown");

  return (
    <div className="bg-gradient-to-br bg-[#A47148] bg-[#A47148] p-4 rounded-2xl shadow-md mb-0">
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setActiveTab("grown")}
          className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 
            ${
              activeTab === "grown"
                ? "bg-lime-600 text-white shadow-md"
                : "bg-white text-lime-800 border border-lime-300"
            }`}
        >
          🌳 Fully Grown
        </button>
        <button
          onClick={() => setActiveTab("hatched")}
          className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 
            ${
              activeTab === "hatched"
                ? "bg-lime-600 text-white shadow-md"
                : "bg-white text-lime-800 border border-lime-300"
            }`}
        >
          🐣 Newly Hatched
        </button>
      </div>

      {activeTab === "grown" ? grownContent : hatchedContent}
    </div>
  );
};

export default PetTabs;
