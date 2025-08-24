import React, { useState, useEffect } from "react";
import axios from "axios";
import PlantList from "./PlantList";

function Home() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPlants();
  }, [search, category]);

  const fetchPlants = async () => {
    if (plants.length === 0) setLoading(true);
    setError("");
    let url = `${import.meta.env.VITE_API}/plants?`;
    if (search) url += `name=${search}&`;
    if (category) url += `category=${category}&`;
    try {
      const res = await axios.get(url);
      setTimeout(() => {
        setPlants(res.data.reverse());
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Error loading plants");
      setLoading(false);
    }
  };

  return (
    <div className="bg-green-100">
      <div className="w-full h-36 md:h-96 overflow-hidden relative">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/plants-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="py-8 px-4 sm:px-10 md:px-20 lg:px-36">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
          Explore Our <span className="text-green-700">Collection</span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 sm:py-3 w-full sm:w-72 md:w-96 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 sm:py-3 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Succulent">Succulent</option>
            <option value="Air Purifying">Air Purifying</option>
            <option value="Home Decor">Home Decor</option>
            <option value="Flowering">Flowering</option>
            <option value="Low Light">Low Light</option>
            <option value="Low Maintenance">Low Maintenance</option>
            <option value="Shade">Shade</option>
            <option value="Green">Green</option>
          </select>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-t-4 border-green-600 border-solid mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg font-medium">
              Loading plants...
            </p>
          </div>
        )}

        {error && <div className="text-center text-red-600">{error}</div>}

        {!loading && !error && <PlantList plants={plants} />}

        <hr className="my-8" />

        <div className="text-center text-gray-500 text-xs md:text-sm">
          &copy; 2025 Mini Plant Store. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Home;
