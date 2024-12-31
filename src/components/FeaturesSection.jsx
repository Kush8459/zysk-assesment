import { feature1, feature2, feature3, feature4, feature5, feature6 } from "../assets";

function FeaturesSection() {
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
    {
      icon: feature4,
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: feature5,
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: feature6,
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <div className="py-12 mt-8">
      <div className="max-w-[1280px] text-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center m-auto max-w-3xl mb-12">
          <h4 className="p-2 text-lg font-medium text-[#6941C6]">Features</h4>
          <h2 className="text-3xl font-bold text-gray-900">
            Analytics that feels like it&apos;s from the future
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
