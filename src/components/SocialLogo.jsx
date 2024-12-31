import {
  boltshift,
  featherdev,
  lightbox,
  spherule,
  nietzsche,
  globalbank,
} from "../assets";

function SocialLogo() {
  const logos = [
    { src: boltshift, alt: "Boltshift" },
    { src: lightbox, alt: "Lightbox" },
    { src: featherdev, alt: "FeatherDev" },
    { src: spherule, alt: "Spherule" },
    { src: globalbank, alt: "GlobalBank" },
    { src: nietzsche, alt: "Nietzsche" },
  ];

  return (
    <div className="bg-purple-100 py-12 mt-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-500">
          Join 4,000+ companies already growing
        </h2>
        <div className="flex flex-wrap justify-center items-center mt-8">
          {logos.map((logo, index) => (
            <div key={index} className="m-3">
              <img src={logo.src} alt={logo.alt} className="h-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialLogo;
