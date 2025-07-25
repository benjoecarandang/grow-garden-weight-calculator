import React from "react";
import { Leaf, Star, Flame, Zap, Rabbit } from "lucide-react";

type PetWeightTier = {
  label: string;
  minWeight: number;
  maxWeight?: number;
  icon: React.ReactNode;
  bg: string;
  text: string;
  border: string;
};

const weightTiers: PetWeightTier[] = [
  {
    label: "Small",
    minWeight: 0,
    maxWeight: 0.99,
    icon: <Rabbit className="w-6 h-6 text-gray-500" />,
    bg: "bg-gray-100",
    text: "text-gray-800",
    border: "border-gray-300"
  },
  {
    label: "Normal",
    minWeight: 1,
    maxWeight: 4.99,
    icon: <Leaf className="w-6 h-6 text-green-500" />,
    bg: "bg-green-100",
    text: "text-green-800",
    border: "border-green-300"
  },
  {
    label: "Huge",
    minWeight: 5,
    maxWeight: 7.99,
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    border: "border-yellow-300"
  },
  {
    label: "Titanic",
    minWeight: 8,
    maxWeight: 8.99,
    icon: <Flame className="w-6 h-6 text-red-500" />,
    bg: "bg-red-100",
    text: "text-red-800",
    border: "border-red-300"
  },
  {
    label: "Godly",
    minWeight: 9,
    icon: <Zap className="w-6 h-6 text-purple-500" />,
    bg: "bg-purple-100",
    text: "text-purple-800",
    border: "border-purple-300"
  }
];

const PetWeightClassification: React.FC = () => {
  return (
    <>
      <div className="p-6 bg-gradient-to-b from-green-50 to-lime-100 rounded-2xl shadow-md mb-6 mt-6">
        {/* AdSense Top Banner */}
        <div className="w-full max-h-24 bg-[#FDC5F5] text-[#5D4037] flex items-center justify-center rounded-xl shadow-md"></div>

        <h2 className="text-2xl font-bold text-lime-800 text-center mb-4">
        🦖 Pet Classifications
        </h2>
        <div className="flex flex-col space-y-4">
          {weightTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-4 rounded-xl border shadow-sm ${tier.bg} ${tier.border}`}
            >
              <div className="flex items-center space-x-3">
                {tier.icon}
                <div>
                  <h3 className={`text-lg font-semibold ${tier.text}`}>
                    {tier.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {tier.maxWeight
                      ? `${tier.minWeight}kg - ${tier.maxWeight}kg`
                      : `${tier.minWeight}kg+`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AdSense Bottom Banner */}
      <div className="w-full max-h-24 bg-[#FDE74C] text-[#5D4037] flex items-center justify-center rounded-xl shadow-md"></div>
    </>
  );
};

export default PetWeightClassification;
