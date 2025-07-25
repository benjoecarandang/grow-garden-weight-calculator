import { useState } from "react";
import { WeightIcon, GaugeIcon } from "lucide-react";
import Navbar from "./components/Navbar";
import PetWeightClassification from "./components/PetWeightClassification";
import PetTabs from "./components/PetTabs";
import "./App.css";

function App() {
  const [hatchedWeight, setHatchedWeight] = useState("");
  const [age, setAge] = useState("");
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
    if (weight > 7) return { label: "Godly", color: "#FDC5F5", icon: "🌟" };
    if (weight > 5) return { label: "Titanic", color: "#A2D2FF", icon: "🗿" };
    if (weight > 1) return { label: "Huge", color: "#FDE74C", icon: "🪵" };
    return { label: "Normal", color: "#7BC47F", icon: "🌱" };
  };

  const weight = calculateWeight(hatchedWeight, age);
  const baseWeight = calculateHatchedWeight(currentWeight, reverseAge);

  const hatchedClass = classify(parseFloat(weight));
  const grownClass = classify(parseFloat(baseWeight));

  return (
    <main className="min-h-screen bg-[#A2D2FF] px-4 py-6 font-[Quicksand,sans-serif]">
      <Navbar />

      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            {/* Adsense placement */}
            <div className="w-full max-h-24 bg-[#FDC5F5] text-[#5D4037] flex items-center justify-center rounded-xl shadow-md"></div>

            <PetTabs
              grownContent={
                <>
                  <section>
                    <h2 className="text-xl font-semibold mb-2 text-white">
                      🌱 Reverse: Hatched Weight
                    </h2>
                    <p className="text-sm text-[#FDE74C] mb-4">
                      Input current pet weight and level to calculate hatched
                      weight.
                    </p>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-1 text-white">
                        Current Weight (kg)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={currentWeight}
                          onChange={(e) => setCurrentWeight(e.target.value)}
                          className="w-full px-4 py-2 rounded-xl text-white pr-10 focus:outline-none focus:ring-2 focus:ring-[#7BC47F]"
                          placeholder="Enter current weight"
                        />
                        <WeightIcon className="absolute right-3 top-2.5 h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-1 text-white">
                        Level (Age)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={reverseAge}
                          onChange={(e) => setReverseAge(e.target.value)}
                          disabled={!currentWeight}
                          className={`w-full px-4 py-2 rounded-xl pr-10 text-white ${
                            currentWeight
                              ? "focus:outline-none focus:ring-2 focus:ring-[#7BC47F]"
                              : "bg-gray-400 cursor-not-allowed"
                          }`}
                          placeholder="Enter pet level"
                        />
                        <GaugeIcon className="absolute right-3 top-2.5 h-5 w-5 text-white" />
                      </div>
                    </div>

                    <label className="block text-sm font-semibold mb-1 text-white">
                      Estimated Hatched Weight (kg)
                    </label>
                    <div className="w-full px-4 py-2 rounded-xl bg-[#7BC47F] text-white text-center font-medium">
                      {baseWeight}
                    </div>

                    {parseFloat(baseWeight) > 0 && (
                      <div
                        className="mt-2 text-center font-bold text-white py-2 rounded-xl"
                        style={{ backgroundColor: grownClass.color }}
                      >
                        {grownClass.icon} Classification: {grownClass.label}
                      </div>
                    )}
                  </section>
                </>
              }
              hatchedContent={
                <>
                  <section>
                    <h2 className="text-xl font-semibold mb-2 text-white">
                      🌼 Weight at Level
                    </h2>
                    <p className="text-sm text-[#FDE74C] mb-4">
                      Input hatched weight and level to calculate current
                      weight.
                    </p>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-1 text-white">
                        Hatched Weight (kg)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={hatchedWeight}
                          onChange={(e) => setHatchedWeight(e.target.value)}
                          className="w-full px-4 py-2 rounded-xl text-white pr-10 focus:outline-none focus:ring-2 focus:ring-[#7BC47F]"
                          placeholder="Enter hatched weight"
                        />
                        <WeightIcon className="absolute right-3 top-2.5 h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-1 text-white">
                        Level (Age)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          disabled={!hatchedWeight}
                          className={`w-full px-4 py-2 rounded-xl pr-10 text-white ${
                            hatchedWeight
                              ? "focus:outline-none focus:ring-2 focus:ring-[#7BC47F]"
                              : "bg-gray-400 cursor-not-allowed"
                          }`}
                          placeholder="Enter pet level"
                        />
                        <GaugeIcon className="absolute right-3 top-2.5 h-5 w-5 text-white" />
                      </div>
                    </div>

                    <label className="block text-sm font-semibold mb-1 text-white">
                      Weight at Level (kg)
                    </label>
                    <div className="w-full px-4 py-2 rounded-xl bg-[#7BC47F] text-white text-center font-medium">
                      {weight}
                    </div>

                    {hatchedWeight.trim() !== "" &&
                      !isNaN(parseFloat(hatchedWeight)) && (
                        <div
                          className="mt-2 text-center font-bold text-white py-2 rounded-xl"
                          style={{ backgroundColor: hatchedClass.color }}
                        >
                          {hatchedClass.icon} Classification:{" "}
                          {hatchedClass.label}
                        </div>
                      )}
                  </section>
                </>
              }
            />

            {/* Adsense placement */}
            <div className="w-full max-h-24 bg-[#FDE74C] text-[#5D4037] flex items-center justify-center rounded-xl shadow-md"></div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <PetWeightClassification />
            </div>
          </aside>
        </div>

        <section className="mt-12 text-center">
          <div className="inline-block bg-white bg-opacity-80 px-6 py-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold text-[#5D4037]">
              🌟 More Features Coming Soon!
            </h3>
            <p className="text-sm text-[#5D4037] mt-1">
              We're working on new tools and calculators to help you raise the
              best garden!
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
