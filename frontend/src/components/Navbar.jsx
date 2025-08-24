import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-4 sm:px-10 md:px-20 lg:px-28 py-4 flex sm:flex-row justify-between items-center gap-3 sm:gap-0">
      <h1 className="text-xl md:text-2xl font-bold">Urvann</h1>
      <div className="">
        <Link
          to="/"
          className="hover:bg-green-600 px-3 py-2 rounded-lg transition text-sm md:text-base"
        >
          Home
        </Link>
        <Link
          to="/admin"
          className="hover:bg-green-600 px-3 py-2 rounded-lg transition text-sm md:text-base"
        >
          Admin (Add Plant)
        </Link>
      </div>
    </nav>
  );
}
