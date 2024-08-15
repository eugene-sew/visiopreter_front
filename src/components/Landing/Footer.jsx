import { appName } from "../../constants/Contants";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        <div>
          <p>© 2024 {appName}</p>
        </div>
        <div className="space-x-4">
          <a
            href="#"
            className="hover:underline">
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:underline">
            Terms of Service
          </a>
        </div>
        <div className="mt-4 md:mt-0 space-x-4">
          {/* Add social media icons here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
