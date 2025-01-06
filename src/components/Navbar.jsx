import React, { useState, useEffect } from "react";
import EditIcon from "../assets/editIcon.svg";
import SettingsIcon from "../assets/settings.svg";
import Stopwatch from "./Stopwatch";
import { Settings } from "./Settings";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="flex justify-between p-4 border">
      <button onClick={handleOpen}>
        <img className="w-8 h-8" src={SettingsIcon} alt="" />
      </button>
      <Settings isOpen={open} onClose={handleClose} />

      <div className="flex items-center gap-2">
        <Stopwatch />
      </div>
      <div className="flex items-center gap-8">
        <p>Rebus</p>
        <p>Clear</p>
        <p>Reveal</p>
        <p>Check</p>
        <img className="w-4 h-4" src={EditIcon} alt="" />
      </div>
    </div>
  );
};
