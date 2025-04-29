import { Link } from "react-router-dom";

const TestComponent = ({ title, description, link }) => {
  const imagePath = `${process.env.PUBLIC_URL}/images/${title.toLowerCase().replace(/\s+/g, "-")}.jpg`;
    

  return (
    <Link
      to={link}
      className="relative block w-full h-80 overflow-hidden rounded-2xl shadow-xl transition-transform transform hover:scale-105"
    >
      {/* Background Image */}
      <img
        src={imagePath}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 hover:opacity-80"
      />

      {/* Text Box */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors duration-500">
        <h2 className="text-3xl font-light opacity-90 transform transition-transform duration-500 hover:-translate-y-1">
          {title}
        </h2>
        <p className="text-sm font-light opacity-75 mt-2 transform transition-transform duration-500 hover:translate-y-1">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default TestComponent;
