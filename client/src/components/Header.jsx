import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-neutral-700 shadow-md">
      {/*bg means background */}
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-cyan-500">BBR</span>
            <span className="text-blue-100">.net</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
            <Link to={"/"}>
          <li className="hidden sm:inline text-blue-100 hover:underline">
            Home
          </li>
          </Link>
          <Link to={"/about"}>
          <li className="hidden sm:inline text-blue-100 hover:underline">
            About
          </li>
          </Link>
          <Link to={"/sign-in"}>
          <li className=" text-blue-100 hover:underline">SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
