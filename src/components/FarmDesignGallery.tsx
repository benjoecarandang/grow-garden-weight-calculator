import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import farmDesigns from "../data/farmDesignsObject";
import { Analytics } from "@vercel/analytics/react";

export default function FarmDesignGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Analytics />
      <div className="max-w-7xl mx-auto w-full min-h-screen p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#5a8f29] mb-6 text-center">
          Farm Designs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {farmDesigns.map((design) => (
            <div
              key={design.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(design.imageUrl)}
            >
              <img
                src={design.imageUrl}
                alt={design.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-[#46761e]">
                  {design.title}
                </h2>
                <p className="text-sm text-[#7c9c5f]">
                  Uploaded by {design.uploader}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Zoom Modal */}
        <Dialog
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        >
          <div className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-black z-10"
            >
              <X className="w-6 h-6" />
            </button>
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
