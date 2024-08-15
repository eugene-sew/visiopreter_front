import { useState } from "react";

const faqs = [
  {
    question: "How accurate is the translation?",
    answer: "Our AI achieves over 95% accuracy in translation.",
  },
  {
    question: "What languages are supported?",
    answer: "Currently, we support English.",
  },
  {
    question: "How can I get started?",
    answer: "Just click the Get Started button and follow the instructions.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4">
              <h3
                className="cursor-pointer text-lg font-semibold flex justify-between items-center"
                onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </h3>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
