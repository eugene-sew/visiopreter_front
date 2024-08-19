import { useState } from "react";
import { Controls, Stream } from "../../components";
import { useOutletContext } from "react-router-dom";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [facingMode, setFacingMode] = useState("user");
  const isLive = useOutletContext();
  const handleUploadClicked = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleFacingMode = () => {
    setFacingMode((prevMode) => (prevMode === "user" ? "environment" : "user"));
  };

  return (
    <div className="w-full h-full grid grid-rows-5 gap-10 pb-10 relative">
      <div className="row-span-4">
        <Stream
          showModal={showModal}
          handleOpenModal={handleUploadClicked}
          handleCloseModal={handleCloseModal}
          facingMode={facingMode}
          isLive={isLive}
        />
      </div>
      <div className="row-span-1">
        <Controls
          handleUploadClicked={handleUploadClicked}
          showModal={showModal}
          toggleFacingMode={toggleFacingMode}
          isLive={isLive}
          facingMode={facingMode}
        />
      </div>
    </div>
  );
};

export default Main;
