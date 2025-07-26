import { useState } from "react";
import { WeightIcon, GaugeIcon, Calculator, TrendingUp, Leaf, Zap } from "lucide-react";
import PetWeightClassification from "./PetWeightClassification";
import PetTabs from "./PetTabs";
import { Analytics } from "@vercel/analytics/react";

function PetCalculator() {
  const [hatchedWeight, setHatchedWeight] = useState("");
  const [age, setAge] = useState("1");
  const [reverseAge, setReverseAge] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");

  const calculateWeight = (Wh: string, A: string): string => {
    const wh = parseFloat(Wh.trim());
    const a = parseFloat(A.trim());
    if (isNaN(wh) || isNaN(a)) return "0.00";
    return ((wh / 11) * (a + 10)).toFixed(2);
  };

  const calculateHatchedWeight = (W: string, A: string): string => {
    const w = parseFloat(W.trim());
    const a = parseFloat(A.trim());
    if (isNaN(w) || isNaN(a)) return "0.00";
    return ((w * 11) / (a + 10)).toFixed(2);
  };

  const classify = (weight: number) => {
    if (weight > 8.99) return { label: "Godly", color: "from-purple-500 to-pink-500", icon: "🌟", bg: "bg-gradient-to-r from-purple-100 to-pink-100" };
    if (weight > 7.99) return { label: "Titanic", color: "from-blue-500 to-cyan-500", icon: "🗿", bg: "bg-gradient-to-r from-blue-100 to-cyan-100" };
    if (weight > 4.99) return { label: "Huge", color: "from-yellow-500 to-orange-500", icon: "🪵", bg: "bg-gradient-to-r from-yellow-100 to-orange-100" };
    if (weight > 0.99) return { label: "Normal", color: "from-green-500 to-emerald-500", icon: "🐔", bg: "bg-gradient-to-r from-green-100 to-emerald-100" };
    return { label: "Small", color: "from-gray-400 to-gray-500", icon: "🌱", bg: "bg-gradient-to-r from-gray-100 to-gray-200" };
  };

  const weight = calculateWeight(hatchedWeight, age);
  const baseWeight = calculateHatchedWeight(currentWeight, reverseAge);

  const hatchedClass = classify(parseFloat(hatchedWeight));
  const grownClass = classify(parseFloat(baseWeight));

  return (
    <>
      <Analytics />

      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Pet Weight Calculator
            </h1>
          </div>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Master the art of pet growth! Calculate weights, predict potential, and discover your pet's true classification.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Calculator Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Info Card */}
            <div className="glass-effect p-6 rounded-2xl card-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Growth Mechanics</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-800 leading-relaxed">
                  Your pet's journey begins at hatching with a randomly assigned weight that shapes its destiny. 
                  This initial weight determines both starting stats and growth potential by age 100. 
                  <span className="font-semibold text-green-700"> Small pets (0-0.99kg)</span> grow modestly, while 
                  <span className="font-semibold text-purple-700"> Godly pets (9kg+)</span> reach legendary proportions!
                </p>
              </div>
            </div>

            {/* Calculator Tabs */}
            <PetTabs
              grownContent={
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Reverse Calculation</h3>
                      <p className="text-sm text-gray-700">Find your pet's original hatched weight</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Current Weight (kg)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={currentWeight}
                          onChange={(e) => setCurrentWeight(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl input-modern focus-ring"
                          placeholder="Enter current weight"
                        />
                        <WeightIcon className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Level (Age)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={reverseAge}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0 && value <= 100)
                              setReverseAge(e.target.value);
                          }}
                          disabled={!currentWeight}
                          className={`w-full px-4 py-3 rounded-xl pr-10 ${
                            currentWeight
                              ? "input-modern focus-ring"
                              : "bg-gray-100 text-gray-500 cursor-not-allowed"
                          }`}
                          placeholder="Enter pet level"
                          min="0"
                          max="100"
                        />
                        <GaugeIcon className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
                      </div>
                    </div>
                  </div>

                  {/* Result Display */}
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-gray-800">
                      Estimated Hatched Weight
                    </label>
                    <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white text-center">
                      <span className="text-2xl font-bold">{baseWeight} kg</span>
                    </div>

                    {parseFloat(baseWeight) > 0 && (
                      <div className={`p-4 rounded-xl text-center ${grownClass.bg}`}>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl">{grownClass.icon}</span>
                          <span className="text-lg font-bold text-gray-900">
                            {grownClass.label} Classification
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              }
              hatchedContent={
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Forward Calculation</h3>
                      <p className="text-sm text-gray-700">Predict your pet's future weight</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Hatched Weight (kg)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={hatchedWeight}
                          onChange={(e) => setHatchedWeight(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl input-modern focus-ring"
                          placeholder="Enter hatched weight"
                        />
                        <WeightIcon className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Level (Age)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={age}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0 && value <= 100)
                              setAge(e.target.value);
                          }}
                          disabled={!hatchedWeight}
                          className={`w-full px-4 py-3 rounded-xl pr-10 ${
                            hatchedWeight
                              ? "input-modern focus-ring"
                              : "bg-gray-100 text-gray-500 cursor-not-allowed"
                          }`}
                          placeholder="Enter pet level"
                          min="0"
                          max="100"
                        />
                        <GaugeIcon className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
                      </div>
                    </div>
                  </div>

                  {/* Result Display */}
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-gray-800">
                      Weight at Level
                    </label>
                    <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white text-center">
                      <span className="text-2xl font-bold">{weight} kg</span>
                    </div>

                    {hatchedWeight.trim() !== "" && !isNaN(parseFloat(hatchedWeight)) && (
                      <div className={`p-4 rounded-xl text-center ${hatchedClass.bg}`}>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl">{hatchedClass.icon}</span>
                          <span className="text-lg font-bold text-gray-900">
                            {hatchedClass.label} Classification
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              }
            />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <PetWeightClassification />
            </div>
          </aside>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center">
          <div className="glass-effect p-8 rounded-2xl card-shadow max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">More Features Coming Soon!</h3>
            </div>
            <p className="text-gray-800">
              We're cultivating new tools and calculators to help you raise the most magnificent garden ever!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PetCalculator;
