import { avatar, company } from "../assets";

function TestimonialSection() {
  const testimonial = {
    quote:
      "We've been using Untitled to kick start every new project and can't imagine working without it.",
    author: "Candice Wu",
    role: "Product Manager, Sisyphus",
    image: company,
    avatar: avatar,
  };

  return (
    <div className="bg-purple-100 py-12 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="mx-auto h-10 w-[140px] rounded-full mb-4"
          />
          <blockquote>
            <p className="text-lg font-medium text-gray-800 sm:text-4xl">
              {testimonial.quote}
            </p>
            <footer className="mt-12">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="mx-auto h-16 w-16 rounded-full mb-4"
              />
              <p className="text-base font-semibold text-gray-900">
                {testimonial.author}
              </p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
