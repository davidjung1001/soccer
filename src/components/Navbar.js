import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Clickable Title - Navigates to Home */}
        <Link to="/" className="text-2xl font-bold hover:underline">
          Soccer Training
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><Link to="/individual-training" className="hover:underline">Individual Training</Link></li>
          <li><Link to="/team-drills" className="hover:underline">Team Drills</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;