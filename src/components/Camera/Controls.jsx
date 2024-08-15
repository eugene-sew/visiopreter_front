/* eslint-disable react/prop-types */

const Controls = ({
  handleUploadClicked,
  handleDownloadClicked,
  showModal,
}) => {
  return (
    <div className="w-full h-full px-2 flex justify-center items-center">
      <div className="flex justify-center w-full gap-5">
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
