import React from "react";
import { Leaf, Star, Flame, Zap, Rabbit, Trophy, TrendingUp } from "lucide-react";

type PetWeightTier = {
  label: string;
  minWeight: number;
  maxWeight?: number;
  icon: React.ReactNode;
  gradient: string;
  textColor: string;
  description: string;
  rarity: string;
};

const weightTiers: PetWeightTier[] = [
  {
    label: "Small",
    minWeight: 0,
    maxWeight: 0.99,
    icon: <Rabbit className="w-6 h-6 text-gray-700" />,
    gradient: "from-gray-400 to-gray-500",
    textColor: "text-gray-800",
    description: "Modest growth potential",
    rarity: "Common"
  },
  {
    label: "Normal",
    minWeight: 1,
    maxWeight: 4.99,
    icon: <Leaf className="w-6 h-6 text-green-700" />,
    gradient: "from-green-500 to-emerald-500",
    textColor: "text-green-800",
    description: "Balanced growth rate",
    rarity: "Uncommon"
  },
  {
    label: "Huge",
    minWeight: 5,
    maxWeight: 7.99,
    icon: <Star className="w-6 h-6 text-yellow-700" />,
    gradient: "from-yellow-500 to-orange-500",
    textColor: "text-yellow-800",
    description: "Impressive size potential",
    rarity: "Rare"
  },
  {
    label: "Titanic",
    minWeight: 8,
    maxWeight: 8.99,
    icon: <Flame className="w-6 h-6 text-red-700" />,
    gradient: "from-red-500 to-pink-500",
    textColor: "text-red-800",
    description: "Massive growth capacity",
    rarity: "Epic"
  },
  {
    label: "Godly",
    minWeight: 9,
    icon: <Zap className="w-6 h-6 text-purple-700" />,
    gradient: "from-purple-500 to-indigo-500",
    textColor: "text-purple-800",
    description: "Legendary proportions",
    rarity: "Legendary"
  }
];

const PetWeightClassification: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-effect p-6 rounded-2xl card-shadow">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Pet Classifications</h2>
            <p className="text-sm text-gray-700">Discover your pet's potential</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-700">
          <TrendingUp className="w-4 h-4" />
          <span>Based on hatched weight</span>
        </div>
      </div>

      {/* Classification Cards */}
      <div className="space-y-4">
        {weightTiers.map((tier, idx) => (
          <div
            key={idx}
            className="glass-effect p-4 rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 bg-gradient-to-r ${tier.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  {tier.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${tier.textColor}`}>
                    {tier.label}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium">
                    {tier.rarity}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-semibold ${tier.textColor}`}>
                  {tier.maxWeight
                    ? `${tier.minWeight}kg - ${tier.maxWeight}kg`
                    : `${tier.minWeight}kg+`}
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-700">
              {tier.description}
            </p>
          </div>
        ))}
      </div>

      {/* Info Card */}
      <div className="glass-effect p-4 rounded-xl card-shadow">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-gray-800">Pro Tip</span>
        </div>
        <p className="text-xs text-gray-700">
          Higher hatched weights lead to exponentially greater growth potential. A 3kg hatchling can reach 30kg at max level!
        </p>
      </div>
    </div>
  );
};

export default PetWeightClassification;
