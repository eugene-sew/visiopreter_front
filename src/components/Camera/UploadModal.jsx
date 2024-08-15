import { useRef, useState } from "react";

const UploadModal = ({ isOpen, onClose }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const video = document.createElement("video");
      video.preload = "metadata";

      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src);

        const duration = video.duration;
        const fileSize = file.size / 1024 / 1024; // in MB

        if (fileSize > 10) {
          setErrorMessage("File size exceeds 10MB.");
        } else if (duration > 60) {
          setErrorMessage("Video duration exceeds 1 minute.");
        } else {
          setVideoFile(file);
          setErrorMessage("");
        }
      };

      video.src = URL.createObjectURL(file);
    }
  };
  const handleUpload = () => {
    if (!videoFile) {
      setErrorMessage("Please select a valid video file.");
      return;
    }

    // Handle the upload logic here (e.g., send the file to a server)
    console.log("Uploading:", videoFile);
    onClose(); // Close the modal after upload
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Upload Video</h2>

        <div
          onClick={triggerFileInput}
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
          Click to Select Video
        </div>

        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        {videoFile && <p className="mt-4">{videoFile.name}</p>}

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
          <button
            onClick={handleUpload}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
