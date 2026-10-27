import React from "react";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";

const Profile = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5f0eb",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <TopBar title="Profil Saya" />

      <div
        style={{
          flex: 1,
          padding: "24px 16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            width: "100%",
            maxWidth: "340px",
            textAlign: "center",
            border: "1px solid #e0d0c1",
          }}
        >
          <img
            src="/profil.jpg"
            alt="Profil"
            style={{
              width: "140px",
              height: "140px",
              objectFit: "cover",
              borderRadius: "12px",
              display: "block",
              margin: "0 auto 18px auto",
              border: "3px solid #4a2c2a",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          />

          <h2
            style={{
              margin: "0 0 6px 0",
              color: "#4a2c2a",
              fontSize: "20px",
            }}
          >
            Bening Radiktya
          </h2>

          <p
            style={{
              margin: "0 0 16px 0",
              color: "#8d6e63",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            NIM: 243016024
          </p>

          <div
            style={{
              borderTop: "1px solid #eee",
              paddingTop: "14px",
              textAlign: "left",
              fontSize: "14px",
              color: "#444444",
            }}
          >
            <div style={{ marginBottom: "8px" }}>
              <span style={{ color: "#8d6e63", fontWeight: "bold" }}>
                Program Studi:{" "}
              </span>
              <span>S1 Informatika</span>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ color: "#8d6e63", fontWeight: "bold" }}>
                Angkatan:{" "}
              </span>
              <span>2024</span>
            </div>
            <div>
              <span style={{ color: "#8d6e63", fontWeight: "bold" }}>
                Status:{" "}
              </span>
              <span>Mahasiswa Aktif</span>
            </div>
          </div>
        </div>
      </div>

      <BottomBar active="profile" />
    </div>
  );
};

export default Profile;
