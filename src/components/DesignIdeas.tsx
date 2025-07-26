import { useState } from "react";
import { LightbulbIcon, PaletteIcon, SparklesIcon } from "lucide-react";

function DesignIdeas() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const designIdeas = [
    {
      id: 1,
      title: "Garden Layout Planner",
      description: "Interactive tool to plan your garden layout with different pet habitats and growth zones.",
      category: "tools",
      difficulty: "Beginner",
      icon: "🌱",
      color: "#7BC47F"
    },
    {
      id: 2,
      title: "Pet Growth Tracker",
      description: "Track your pets' growth progress with visual charts and milestone celebrations.",
      category: "tracking",
      difficulty: "Intermediate",
      icon: "📊",
      color: "#A2D2FF"
    },
    {
      id: 3,
      title: "Breeding Calculator",
      description: "Calculate optimal breeding combinations for rare pet types and special abilities.",
      category: "breeding",
      difficulty: "Advanced",
      icon: "💕",
      color: "#FDC5F5"
    },
    {
      id: 4,
      title: "Seasonal Garden Themes",
      description: "Design garden themes for different seasons with matching pet habitats.",
      category: "themes",
      difficulty: "Beginner",
      icon: "🍂",
      color: "#FDE74C"
    },
    {
      id: 5,
      title: "Pet Training Scheduler",
      description: "Create training schedules for pets to maximize their potential and abilities.",
      category: "training",
      difficulty: "Intermediate",
      icon: "🎯",
      color: "#E4E1DC"
    },
    {
      id: 6,
      title: "Community Garden Hub",
      description: "Connect with other gardeners to share tips, trade pets, and collaborate on projects.",
      category: "social",
      difficulty: "Advanced",
      icon: "👥",
      color: "#FF6B6B"
    }
  ];

  const categories = [
    { id: "all", name: "All Ideas", icon: "🌟" },
    { id: "tools", name: "Tools", icon: "🔧" },
    { id: "tracking", name: "Tracking", icon: "📈" },
    { id: "breeding", name: "Breeding", icon: "💕" },
    { id: "themes", name: "Themes", icon: "🎨" },
    { id: "training", name: "Training", icon: "🎯" },
    { id: "social", name: "Social", icon: "👥" }
  ];

  const filteredIdeas = selectedCategory === "all" 
    ? designIdeas 
    : designIdeas.filter(idea => idea.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto mb-auto w-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          <LightbulbIcon className="inline-block w-8 h-8 mr-2" />
          Design Ideas & Features
        </h1>
        <p className="text-lg text-[#FDE74C] max-w-2xl mx-auto">
          Explore upcoming features and design ideas for the ultimate garden experience. 
          Help us prioritize what to build next!
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-lime-600 text-white shadow-md"
                  : "bg-white text-lime-800 border border-lime-300 hover:bg-lime-50"
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.map((idea) => (
          <div
            key={idea.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div 
              className="h-2"
              style={{ backgroundColor: idea.color }}
            ></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{idea.icon}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  idea.difficulty === "Beginner" ? "bg-green-100 text-green-800" :
                  idea.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {idea.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {idea.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {idea.description}
              </p>
              <div className="flex items-center justify-between">
                <button className="text-lime-600 hover:text-lime-700 font-semibold text-sm flex items-center gap-1">
                  <SparklesIcon className="w-4 h-4" />
                  Vote for this
                </button>
                <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1">
                  <PaletteIcon className="w-4 h-4" />
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-md max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Have Your Own Idea?
          </h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear your suggestions for new features and improvements!
          </p>
          <button className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
            Submit Your Idea
          </button>
        </div>
      </div>
    </section>
  );
}

export default DesignIdeas;
