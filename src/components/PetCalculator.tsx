import { useState } from "react";
import { WeightIcon, GaugeIcon } from "lucide-react";
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
    if (weight > 8.99) return { label: "Godly", color: "#FDC5F5", icon: "🌟" };
    if (weight > 7.99)
      return { label: "Titanic", color: "#A2D2FF", icon: "🗿" };
    if (weight > 4.99) return { label: "Huge", color: "#FDE74C", icon: "🪵" };
    if (weight > 0.99) return { label: "Normal", color: "#7BC47F", icon: "🐔" };
    return { label: "Small", color: "#E4E1DC", icon: "🌱" };
  };

  const weight = calculateWeight(hatchedWeight, age);
  const baseWeight = calculateHatchedWeight(currentWeight, reverseAge);

  const hatchedClass = classify(parseFloat(hatchedWeight));
  const grownClass = classify(parseFloat(baseWeight));

  return (
    <>
      <Analytics />

      <section className="max-w-7xl mx-auto mb-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            {/* Adsense placement */}
            <div className="w-full max-h-24 bg-[#FDC5F5] text-[#5D4037] flex items-center justify-center rounded-xl shadow-md"></div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md mx-auto">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Pet Growth Mechanics
              </h2>

              <div>
                <p>
                  Upon hatching, a pet's weight is randomly assigned and
                  directly impacts both its starting stats and its potential
                  growth by age 100. Classification is based on hatch weight:
                  Small (Less than 1kg), Normal (1kg to 4.99kg), Huge (5kg to
                  7.99kg), Titanic (8kg and 8.99kg), and Godly (9kg+). For
                  example, a pet hatched at 1 kg may reach up to 10 kg at age
                  100, while one hatched at 3 kg can grow up to 30 kg.
                </p>
              </div>
            </div>

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
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0 && value <= 100)
                              setReverseAge(e.target.value);
                          }}
                          disabled={!currentWeight}
                          className={`w-full px-4 py-2 rounded-xl pr-10 text-white ${
                            currentWeight
                              ? "focus:outline-none focus:ring-2 focus:ring-[#7BC47F]"
                              : "bg-gray-400 cursor-not-allowed"
                          }`}
                          placeholder="Enter pet level"
                          min="0"
                          max="100"
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
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0 && value <= 100)
                              setAge(e.target.value);
                          }}
                          disabled={!hatchedWeight}
                          className={`w-full px-4 py-2 rounded-xl pr-10 text-white ${
                            hatchedWeight
                              ? "focus:outline-none focus:ring-2 focus:ring-[#7BC47F]"
                              : "bg-gray-400 cursor-not-allowed"
                          }`}
                          placeholder="Enter pet level"
                          min="0"
                          max="100"
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

        <section className="mt-12 text-center mb-4">
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
    </>
  );
}

export default PetCalculator;
