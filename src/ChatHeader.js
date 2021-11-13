import React from "react";
import "./ChatHeader.css";
function ChatHeader() {
  return (
    <div className="chatHeader">
      <h2>i AM</h2>

      <div className="chatHeader_left">
        <h3>
          <span className="chatHeder_hash">#</span>Youtube
        </h3>
      </div>
      <div className="chatHeader_right"></div>
    </div>
  );
}

export default ChatHeader;
