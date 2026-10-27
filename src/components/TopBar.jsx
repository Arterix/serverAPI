import React from "react";

const TopBar = (props) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        color: "#ffffff",
        padding: "16px",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold",
        boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {props.title}
    </div>
  );
};

export default TopBar;
