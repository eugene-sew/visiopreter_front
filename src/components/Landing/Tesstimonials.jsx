const testimonials = [
  { quote: "This app changed my life!", name: "John Doe", rating: 5 },
  { quote: "Highly recommend it.", name: "Jane Smith", rating: 4 },
  {
    quote: "The best sign language translator.",
    name: "Emily Johnson",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-lg"> "{testimonial.quote}" </p>
              <div className="mt-4 flex items-center">
                <div className="font-bold">{testimonial.name}</div>
                <div className="ml-4">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
