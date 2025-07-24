import { useState } from "react";
import "./App.css";
import { WeightIcon, GaugeIcon } from "lucide-react";
import Navbar from "./components/Navbar";

function App() {
  const [hatchedWeight, setHatchedWeight] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [reverseAge, setReverseAge] = useState<string>("");
  const [currentWeight, setCurrentWeight] = useState<string>("");

  const calculateWeight = (Wh: string, A: string): string => {
    const wh = parseFloat(Wh.trim());
    const a = parseFloat(A.trim());
    if (isNaN(wh) || isNaN(a)) return "";
    return ((wh / 11) * (a + 10)).toFixed(2);
  };

  const calculateHatchedWeight = (W: string, A: string): string => {
    const w = parseFloat(W.trim());
    const a = parseFloat(A.trim());
    if (isNaN(w) || isNaN(a)) return "";
    return ((w * 11) / (a + 10)).toFixed(2);
  };

  const weight = calculateWeight(hatchedWeight, age);
  const baseWeight = calculateHatchedWeight(currentWeight, reverseAge);

  return (
    <>
      <Navbar />
      <div className="bg-[#264d37] flex justify-center p-4">
        <div className="bg-[#3b7551] text-white p-6 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Pet Weight Calculator
          </h1>

          {/* Reverse Calculation */}
          <h2 className="text-lg font-semibold mb-2">
            Reverse: Calculate Hatched Weight
          </h2>
          <p className="mb-4 text-sm">
            Input the current weight of the pet and the level to calculate the
            hatched weight.
          </p>
          <label className="block text-sm font-semibold mb-1">
            Current Weight (kg)
          </label>
          <div className="relative mb-4">
            <input
              type="number"
              className="w-full px-4 py-2 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10"
              value={currentWeight}
              onChange={(e) => setCurrentWeight(e.target.value)}
              placeholder="Enter current weight"
            />
            <WeightIcon className="absolute right-3 top-2.5 h-5 w-5 text-white-500" />
          </div>

          {currentWeight && (
            <>
              <label className="block text-sm font-semibold mb-1">
                Level (Age)
              </label>
              <div className="relative mb-4">
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10"
                  value={reverseAge}
                  onChange={(e) => setReverseAge(e.target.value)}
                  placeholder="Enter pet level"
                />
                <GaugeIcon className="absolute right-3 top-2.5 h-5 w-5 text-white-500" />
              </div>

              <label className="block text-sm font-semibold mb-1">
                Estimated Hatched Weight (kg)
              </label>
              <div className="w-full px-4 py-2 rounded-xl bg-[#a7dca4] text-black text-center font-medium">
                {baseWeight}
              </div>
            </>
          )}

          {/* Normal Calculation */}
          <h2 className="text-lg font-semibold mb-2">
            Calculate Weight at Level
          </h2>
          <p className="mb-4 text-sm">
            Input the hatched weight of the pet and the level to calculate the
            weight at that level.
          </p>
          <label className="block text-sm font-semibold mb-1">
            Hatched Weight (kg)
          </label>
          <div className="relative mb-4">
            <input
              type="number"
              className="w-full px-4 py-2 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10"
              value={hatchedWeight}
              onChange={(e) => setHatchedWeight(e.target.value)}
              placeholder="Enter hatched weight"
            />
            <WeightIcon className="absolute right-3 top-2.5 h-5 w-5 text-white-500" />
          </div>

          {hatchedWeight && (
            <>
              <label className="block text-sm font-semibold mb-1">
                Level (Age)
              </label>
              <div className="relative mb-4">
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter pet level"
                />
                <GaugeIcon className="absolute right-3 top-2.5 h-5 w-5 text-white-500" />
              </div>

              <label className="block text-sm font-semibold mb-1">
                Weight at Level (kg)
              </label>
              <div className="w-full px-4 py-2 rounded-xl bg-[#a7dca4] text-black text-center font-medium">
                {weight}
              </div>
            </>
          )}

          <hr className="my-6 border-lime-200" />
        </div>
      </div>
    </>
  );
}

export default App;
