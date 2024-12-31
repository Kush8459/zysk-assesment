function FreeTrialSection() {
  return (
    <div className="bg-purple-100 py-12 mt-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Start your free trial
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="mt-12 space-x-4">
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-100">
            Learn more
          </button>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default FreeTrialSection;
