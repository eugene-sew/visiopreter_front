import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { useState } from "react";

const Layout = () => {
  const [isLive, setIsLive] = useState(false);

  const handleLive = () => {
    setIsLive(!isLive);
  };

  return (
    <div className="px-2 bg-gray-100 h-screen w-screen pt-2 grid grid-rows-10">
      <div className="row-span-1">
        <Header
          handleLive={handleLive}
          isLive={isLive}
        />
      </div>

      <div className="row-span-9">
        <Outlet context={isLive} />
      </div>
    </div>
  );
};

export default Layout;
