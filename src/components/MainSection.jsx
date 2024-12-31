import { desktopfull, desktophalf } from "../assets";
import { Link } from "react-router-dom";

function MainSection() {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-purple-200 border-2 border-purple-600 w-[300px] sm:w-[400px] p-2 rounded-lg mx-auto my-2">
          <div className="flex flex-col sm:flex-row items-center justify-between text-purple-600">
          <span className="font-semibold border-2 bg-white rounded-full px-2">New feature</span>
            <Link
              to="/dashboard"
              className="flex items-center hover:text-purple-800"
            >
              Check out the team dashboard
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-center p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-4">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className="mt-8 space-x-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700">
              Demo
            </button>
            <button className="bg-transparent border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-100">
              Sign up
            </button>
          </div>
        </div>

        <div className="mt-6">
          <picture>
            <source srcSet={desktophalf} media="(min-width: 768px)" />
            <source srcSet={desktopfull} media="(max-width: 767px)" />
            <img
              src={desktopfull}
              alt="Analytics Chart"
              className="w-full h-auto object-cover mt-2"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
