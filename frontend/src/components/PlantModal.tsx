export default function PlantModal({ plant, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-3xl relative flex overflow-hidden animate-fadeIn">
        <div className="w-2/5 bg-gradient-to-b from-green-200 to-green-100 flex flex-col items-center justify-center p-6 border-r border-green-300">
          <div className="w-28 h-28 bg-green-300 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-md mb-4">
            🌿
          </div>
          <h2 className="text-2xl font-extrabold text-green-800 text-center break-words">
            {plant.name}
          </h2>
        </div>

        <div className="flex-1 p-6 relative">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✖
          </button>
          <p className="text-lg font-semibold text-green-700 mb-2">
            💰 Price: <span className="text-gray-800">₹{plant.price}</span>
          </p>
          <p className="text-gray-600 mb-2">
            🏷 Categories:{" "}
            <span className="font-medium">{plant.categories.join(", ")}</span>
          </p>
          <p
            className={`font-semibold mb-4 ${
              plant.available ? "text-green-600" : "text-red-500"
            }`}
          >
            {plant.available ? "✅ Available" : "❌ Out of Stock"}
          </p>

          <div className="space-y-2 text-gray-700">
            <p>
              🌱 <span className="font-medium">Watering:</span> Twice a week
            </p>
            <p>
              ☀️ <span className="font-medium">Sunlight:</span> Partial sunlight
            </p>
            <p>
              🌍 <span className="font-medium">Soil Type:</span> Well-drained
              soil
            </p>
            <p>
              ⏳ <span className="font-medium">Growth Time:</span> 3-6 months
            </p>
          </div>

          <div className="mt-5 bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-lg font-bold text-green-700 mb-2">
              🌸 Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {plant.description ||
                "This plant is perfect for indoor decoration and improves air quality. Easy to maintain and adds a touch of greenery to your home or office."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
