import React from "react";
import { useNavigate } from "react-router-dom";

const BottomBar = (props) => {
  const navigate = useNavigate();

  const buttonStyle = (isActive, isLogout = false) => ({
    background: isActive ? "#6d4441" : "transparent",
    color: isLogout ? "#f0a8a8" : "#ffffff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: isActive ? "bold" : "normal",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    minWidth: "70px",
  });

  return (
    <div
      style={{
        backgroundColor: "red",
        color: "#ffffff",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0",
        position: "sticky",
        bottom: 0,
        zIndex: 100,
        boxShadow: "0 -2px 5px rgba(0,0,0,0.15)",
      }}
    >
      <button onClick={() => navigate("/dashboard")} style={buttonStyle(props.active === "dashboard")}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <span>Dashboard</span>
      </button>

      <button onClick={() => navigate("/profile")} style={buttonStyle(props.active === "profile")}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        <span>Profil</span>
      </button>

      <button onClick={() => navigate("/login")} style={buttonStyle(false, true)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
        </svg>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default BottomBar;
