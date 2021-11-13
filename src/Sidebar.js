import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>Harold Geumtcheng</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
