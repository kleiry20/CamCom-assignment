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
    <div className="border p-4 flex justify-between">
      <button onClick={handleOpen}>
        <img className="h-8 w-8" src={SettingsIcon} alt="" />
      </button>
      <Settings isOpen={open} onClose={handleClose} />

      <div className="flex gap-2 items-center">
        <Stopwatch />
      </div>
      <div className="flex gap-8 items-center">
        <p>Rebus</p>
        <p>Clear</p>
        <p>Reveal</p>
        <p>Check</p>
        <img className="w-4 h-4" src={EditIcon} alt="" />
      </div>
    </div>
  );
};
