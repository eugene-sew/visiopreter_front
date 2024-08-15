const Header = ({ handleLive, isLive }) => {
  return (
    <div className="w-full bg-white px-3 py-3 rounded-md shadow-md flex justify-between items-center">
      <div className="w-fit text-center text-gray-700">
        <h1 className="font-semibold tracking-wider text-xl">
          Visio<span className="text-blue-600">Preter</span>
        </h1>
        <h4 className="text-xs">understand the signs</h4>
      </div>
      <div>
        <button
          className="btn bg-red-600 text-white font-medium"
          onClick={handleLive}>
          {isLive ? "End Live" : "Go Live"}
        </button>
      </div>
    </div>
  );
};

export default Header;
