import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
      <span className="font-bold">Articles</span>
      <span>
        <Link
          to="/"
          className="mr-3 text-white hover:text-blue-100"
        >
          Home
        </Link>
     
        <Link
          to="/posts"
          className="text-white-700 hover:text-blue-100"
        >
          Posts
        </Link>
        </span>
    </nav>
  );
};
