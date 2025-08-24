import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function AddPlantForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    categories: "",
    available: true,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.price || !form.categories) {
      setError("⚠️ Please fill all fields");
      return;
    }

    let catArr = form.categories.split(",").map((c) => c.trim());
    try {
      await axios.post(`${import.meta.env.VITE_API}/plants`, {
        ...form,
        price: Number(form.price),
        categories: catArr,
        available: form.available === "true" || form.available === true,
      });

      setForm({ name: "", price: "", categories: "", available: true });

      navigate("/");
    } catch (err) {
      setError("❌ Error adding plant");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6">
      <div className="w-full max-w-md sm:max-w-lg bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 text-green-700">
          🌱 Add New Plant
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Plant Name
            </label>
            <input
              name="name"
              placeholder="Enter plant name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (₹)
            </label>
            <input
              name="price"
              type="number"
              placeholder="Enter price"
              value={form.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categories
            </label>
            <input
              name="categories"
              placeholder="e.g. Indoor, Flowering"
              value={form.categories}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Separate categories with commas
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Availability
            </label>
            <select
              name="available"
              value={form.available}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value={true}>Available</option>
              <option value={false}>Not Available</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transform hover:scale-[1.02] transition duration-200 shadow-md"
          >
            Add Plant
          </button>

          {error && (
            <div className="text-red-500 text-center text-sm mt-2">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}
