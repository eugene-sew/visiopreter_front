import { Link } from "react-router-dom";
import { hero } from "../../assets";
import { appName } from "../../constants/Contants";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-teal-500 text-white py-20 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Bridge the Communication Gap with{" "}
            <span className="text-white">{appName}</span>
          </h1>
          <p className="text-xl mt-4">
            Instantly translate sign language to text and speech.
          </p>
          <Link to={"platform"}>
            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src={hero}
            alt="Sign Language Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
