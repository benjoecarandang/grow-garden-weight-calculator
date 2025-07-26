import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X, Search, Grid, List, Heart } from "lucide-react";
import farmDesigns from "../data/farmDesignsObject";
import { Analytics } from "@vercel/analytics/react";

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("favoriteFarmDesigns") || "[]");
  } catch {
    return [];
  }
}

function setFavorites(favs: string[]) {
  localStorage.setItem("favoriteFarmDesigns", JSON.stringify(favs));
}

export default function FarmDesignGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavoritesState] = useState<string[]>(getFavorites());
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    setFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavoritesState((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  let filteredDesigns = farmDesigns.filter(
    (design) =>
      design.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      design.uploader.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (showFavorites) {
    filteredDesigns = filteredDesigns.filter((d) => favorites.includes(String(d.id)));
  }

  return (
    <>
      <Analytics />
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
              <Grid className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Farm Design Gallery
            </h1>
          </div>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Discover a growing collection of beautiful Grow a Garden farm designs created by passionate players. 
            Find inspiration for your own unique garden layout!
          </p>
        </div>

        {/* Search and Controls */}
        <div className="glass-effect p-6 rounded-2xl card-shadow">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search designs or creators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl input-modern focus-ring"
              />
            </div>

            {/* View Toggle & Favorites Toggle */}
            <div className="flex items-center space-x-2 bg-white/60 rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-800 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-800 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowFavorites((v) => !v)}
                className={`p-2 rounded-lg transition-all duration-200 flex items-center space-x-1 ${
                  showFavorites
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "text-pink-500 hover:text-pink-600 hover:bg-white/60"
                }`}
                title="Show Favorites"
              >
                <Heart className={`w-5 h-5 ${showFavorites ? "fill-current" : ""}`} />
                <span className="hidden sm:inline text-xs font-semibold">Favorites</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center">
          <p className="text-gray-700">
            Showing <span className="font-semibold text-purple-600">{filteredDesigns.length}</span> of{" "}
            <span className="font-semibold text-purple-600">{farmDesigns.length}</span> designs
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "grid grid-cols-1 md:grid-cols-2 gap-6"
          }
        >
          {filteredDesigns.map((design) => {
            const idStr = String(design.id);
            const isFav = favorites.includes(idStr);
            return (
              <div
                key={design.id}
                className={`glass-effect rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 group ${
                  viewMode === "list" ? "flex items-center" : ""
                }`}
                onClick={() => setSelectedImage(design.imageUrl)}
              >
                <div className={`relative ${viewMode === "list" ? "w-48 h-32 flex-shrink-0" : "h-48"}`}>
                  <img
                    src={design.imageUrl}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    className={`absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-pink-500 hover:text-pink-600 hover:bg-white transition-colors z-10 shadow-md ${isFav ? "" : "opacity-80"}`}
                    onClick={e => { e.stopPropagation(); toggleFavorite(idStr); }}
                    title={isFav ? "Remove from favorites" : "Add to favorites"}
                  >
                    {isFav ? <Heart className="w-5 h-5 fill-current" /> : <Heart className="w-5 h-5" />}
                  </button>
                </div>
                <div className={`p-4 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {design.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    by <span className="font-medium text-purple-600">{design.uploader}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredDesigns.length === 0 && (
          <div className="text-center py-12">
            <div className="p-6 bg-white/60 rounded-2xl max-w-md mx-auto">
              <Search className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No designs found</h3>
              <p className="text-gray-700">Try adjusting your search terms or browse all designs.</p>
            </div>
          </div>
        )}

        {/* Image Zoom Modal */}
        <Dialog
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <div className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]">
            <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-gray-800 hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={selectedImage || ""}
              alt="Selected Design"
              className="w-full h-auto object-contain max-h-[80vh]"
            />
          </div>
        </Dialog>
      </div>
    </>
  );
}
