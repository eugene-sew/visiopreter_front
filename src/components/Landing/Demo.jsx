import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold mb-10">See It in Action</h2>
        <div className="relative w-full h-0 pb-56">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/your-demo-video"
            title="Sign Language Translator Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-8 text-lg">
          Our AI-powered translator is simple and easy to use. Check out the
          video above to see how it works.
        </p>
        <Link to={"platform"}>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Try the Demo Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Demo;
