import { appName } from "../../constants/Contants";

const features = [
  {
    icon: "🕒",
    title: "Real-time Translation",
    description: "Translate sign language instantly.",
  },
  {
    icon: "🌍",
    title: "Multi-language Support",
    description: "Supports multiple languages.",
  },
  {
    icon: "🎨",
    title: "User-friendly Interface",
    description: "Easy to use for everyone.",
  },
  {
    icon: "📱",
    title: "Accessible on All Devices",
    description: "Works on mobile and desktop.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Our {appName}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4">
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
