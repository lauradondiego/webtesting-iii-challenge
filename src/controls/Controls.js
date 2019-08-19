import React from "react";

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel">
      <button disabled={!closed} onClick={toggleLocked} className="toggle-btn">
        {locked ? "Unlock Gate" : "Lock Gate"}
        {/* // if the locked variable is true, show "unlock gate" text on button //
        the ":" means else - and return text "lock gate" */}
      </button>

      <button disabled={locked} onClick={toggleClosed} className="toggle-btn">
        {closed ? "Open Gate" : "Close Gate"}
      </button>
    </div>
  );
};

export default Controls;
