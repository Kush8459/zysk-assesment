import { useState } from "react";
import { team } from "../assets";

function Faq() {
  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Absolutely, you can upgrade or downgrade your plan at any time through your account settings.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. Your cancellation will take effect at the end of the current billing period.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can customize your invoices by adding additional information such as your business name, address, and more.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is done on a monthly basis. You will be billed in advance for the service for the month ahead.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change your account email in your account settings or contact support for help.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="py-12 mt-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">
            Frequently asked questions
          </h2>
          <p className="text-center text-xl text-gray-500 mb-6">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="max-w-4xl px-2 mx-auto mt-12">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg p-4 font-semibold bg-purple-100 rounded-t-lg hover:bg-purple-200"
              >
                {faq.question}
                <span
                  className={`float-right ${
                    activeIndex === index
                      ? "text-purple-500"
                      : "text-purple-400"
                  }`}
                >
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white border rounded-b-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-12 p-6 gap-8 bg-purple-100 rounded-lg">
          <img
            src={team}
            alt="Team Member"
            className="w-[120px] h-14 rounded-full"
          />

          <div className="flex-grow text-center">
            <p className="text-lg font-semibold">Still have questions?</p>
            <p className="text-gray-600 mt-2">
              Can&apos;t find the answer you&apos;re looking for? Please chat to
              our friendly team.
            </p>
          </div>

          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
