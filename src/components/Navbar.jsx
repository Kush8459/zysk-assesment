import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <div className="bg-purple-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <img src="src/assets/logo.png" alt="Logo" className="h-12 w-44" />
          </div>
          <div className="hidden sm:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProductsDropdown}
                className="text-gray-600 hover:text-gray-900 font-medium flex items-center"
              >
                Products <span className="mr-1"></span>
                <svg
                  className={`transform transition-transform duration-500 ${
                    isProductsOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ display: "inline-block" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="absolute z-10 bg-white border border-gray-200 mt-1 py-1 w-48">
                  <Link
                    to="/products/new"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    New Products
                  </Link>
                  <Link
                    to="/products/featured"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Featured
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={toggleResourcesDropdown}
                className="text-gray-600 hover:text-gray-900 font-medium flex items-center"
              >
                Resources <span className="mr-1"></span>
                <svg
                  className={`transform transition-transform duration-500 ${
                    isResourcesOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ display: "inline-block" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute z-10 bg-white border border-gray-200 mt-1 py-1 w-48">
                  <Link
                    to="/resources/blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/resources/tutorials"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Tutorials
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Pricing
            </Link>
            <img
              src="src/assets/profile.png"
              alt="User Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>

          <div className="sm:hidden">
            <button aria-label="Open Menu" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute bg-white w-full">
            <Link
              to="/"
              className="block py-2 text-gray-600 hover:text-gray-900 px-4"
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={toggleProductsDropdown}
                className="w-full text-left py-2 text-gray-600 hover:text-gray-900 flex items-center justify-between px-4"
              >
                Products
                <svg
                  className={`transform transition-transform duration-500 ${
                    isProductsOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ display: "inline-block" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="bg-white border-t border-gray-200">
                  <Link
                    to="/products/new"
                    className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    New Products
                  </Link>
                  <Link
                    to="/products/featured"
                    className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Featured
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={toggleResourcesDropdown}
                className="w-full text-left py-2 text-gray-600 hover:text-gray-900 flex items-center justify-between px-4"
              >
                Resources
                <svg
                  className={`transform transition-transform duration-500 ${
                    isResourcesOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="bg-white border-t border-gray-200">
                  <Link
                    to="/resources/blog"
                    className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/resources/tutorials"
                    className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Tutorials
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="block py-2 text-gray-600 hover:text-gray-900 px-4"
            >
              Pricing
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
