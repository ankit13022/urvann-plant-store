import { useState } from "react";
import PlantModal from "./PlantModal";

export default function PlantList({ plants }) {
  const [selectedPlant, setSelectedPlant] = useState(null);

  if (!plants.length)
    return <div className="text-center text-gray-500">No plants found.</div>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {plants.map((plant, index) => {
          const bgColor = COLORS[index % COLORS.length];

          return (
            <div
              key={plant._id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition flex flex-col"
            >
              {/* Top header */}
              <div
                className={`h-28 md:h-40 flex items-center justify-center ${bgColor}`}
              >
                <h2 className="text-lg md:text-xl font-bold text-gray-800">
                  {plant.name}
                </h2>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base md:text-lg font-bold text-green-700">
                  {plant.name}
                </h3>
                <p className="text-sm md:text-base text-gray-700 font-medium">
                  💰 Price: ₹{plant.price}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  🏷 Categories: {plant.categories.join(", ")}
                </p>
                <p
                  className={`mt-2 font-semibold text-sm md:text-base ${
                    plant.available ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {plant.available ? "✅ Available" : "❌ Out of Stock"}
                </p>

                {/* Push button to bottom */}
                <button
                  onClick={() => setSelectedPlant(plant)}
                  className="mt-auto w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedPlant && (
        <PlantModal
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />
      )}
    </>
  );
}

const COLORS = [
  "bg-rose-200",
  "bg-emerald-200",
  "bg-sky-200",
  "bg-amber-200",
  "bg-violet-200",
  "bg-pink-200",
  "bg-indigo-200",
  "bg-teal-200",
  "bg-orange-200",
  "bg-cyan-200",
];
