import { useState } from "react";
import { Controls, Stream } from "../../components";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const handleUploadClicked = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="w-full h-full grid grid-rows-5 gap-10 pb-10 relative">
      <div className="row-span-4">
        <Stream
          showModal={showModal}
          handleOpenModal={handleUploadClicked}
          handleCloseModal={handleCloseModal}
        />
      </div>
      <div className="row-span-1">
        <Controls
          handleUploadClicked={handleUploadClicked}
          showModal={showModal}
        />
      </div>
    </div>
  );
};

export default Main;
