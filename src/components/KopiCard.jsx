import React from "react";

const KopiCard = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        border: "1px solid #e0d0c1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={props.gambar}
        alt={props.nama}
        style={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "12px" }}>
        <h3
          style={{
            margin: "0 0 6px 0",
            fontSize: "16px",
            color: "#4a2c2a",
          }}
        >
          {props.nama}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            color: "#666666",
            lineHeight: "1.4",
          }}
        >
          {props.deskripsi}
        </p>
      </div>
    </div>
  );
};

export default KopiCard;
