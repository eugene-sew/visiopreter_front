/* eslint-disable react/prop-types */

import { BsCameraVideo, BsPeople, BsPerson } from "react-icons/bs";
import { FcSelfie } from "react-icons/fc";

const Controls = ({
  handleUploadClicked,
  handleDownloadClicked,
  showModal,
  toggleFacingMode,
  isLive,
  facingMode,
}) => {
  return (
    <div className="w-full h-full px-2 flex justify-center items-center">
      <div className="flex justify-center w-full gap-5">
        {isLive && (
          <button
            onClick={toggleFacingMode}
            className="btn bg-blue-800 text-white">
            {facingMode == "user" ? <BsPeople /> : <BsPerson />}
          </button>
        )}
        <button
          className="btn bg-blue-600 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={handleUploadClicked}
          disabled={showModal}>
          Upload Video
        </button>
        <button
          className="btn bg-gray-800 text-white"
          onClick={handleDownloadClicked}>
          Download Transcript
        </button>
      </div>
    </div>
  );
};

export default Controls;
