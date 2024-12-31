import { desktopfull, feature1, feature2, feature3, mobile } from "../assets";
import { Link } from "react-router-dom";

function Content() {
  const features = [
    {
      icon: feature1,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: feature2,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: feature3,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
  ];

  return (
    <div className="py-12 mt-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="p-2 bg-purple-100 border rounded-full text-lg font-medium text-[#6941C6]">
            Features
          </span>
          <h2 className="sm:text-3xl text-2xl mt-2 font-bold text-gray-900">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="mt-4 sm:text-2xl text-xl sm:px-52 text-md text-gray-500">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="flex justify-center sm:left-10 items-center relative">
          <img
            src={mobile}
            alt="Mobile Stats for Olivia Rhye"
            className="sm:h-[500px] h-[320px] object-cover object-top w-[245px] top-20 left-32 sm:absolute"
          />

          <img
            src={desktopfull}
            alt="Desktop Analytics"
            className="w-[768px] hidden sm:block h-[600px] object-cover"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 flex flex-col items-center justify-center"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mx-auto h-12 w-12"
              />
              <h3 className="mt-5 text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-md text-center text-gray-600">
                {feature.description}
              </p>
              <div className="text-indigo-600 hover:text-indigo-800  flex justify-center items-center mt-2">
                <Link to="/learn-more">Learn more</Link>
                <svg
                  className="ml-2 mt-[2px] w-4 h-4"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
