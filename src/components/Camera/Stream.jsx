import { useOutletContext } from "react-router-dom";
import UploadModal from "./UploadModal";
import WebCamCapture from "./WebCamCapture";

const Stream = ({ showModal, handleOpenModal, handleCloseModal }) => {
  const isLive = useOutletContext();
  return (
    <div className="  mt-5 rounded-md h-full grid grid-rows-5 grid-cols-1 md:grid-cols-5 md:grid-rows-1 gap-7">
      <div className="bg-red-600 h-full row-span-4 md:col-span-4 overflow-hidden rounded-md relative">
        <WebCamCapture isLive={isLive} />
        {showModal && (
          <>
            <UploadModal
              isOpen={handleOpenModal}
              onClose={handleCloseModal}
            />
          </>
        )}
      </div>
      <div className="bg-red-600 h-full md:col-span-1 rounded-md">
        Transcript
      </div>
    </div>
  );
};

export default Stream;
