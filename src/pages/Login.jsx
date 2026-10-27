import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "tugas@test.com" && password === "password") {
      navigate("/dashboard");
    } else {
      setError("Email atau password salah!");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f0eb",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "14px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "340px",
          textAlign: "center",
          border: "1px solid #e0d0c1",
        }}
      >
        <h2
          style={{
            color: "#4a2c2a",
            marginBottom: "20px",
            marginTop: 0,
          }}
        >
          Masuk Akun
        </h2>

        {error && (
          <div
            style={{
              backgroundColor: "#ffebee",
              color: "#c62828",
              padding: "10px",
              borderRadius: "8px",
              fontSize: "13px",
              marginBottom: "15px",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label
              style={{
                fontSize: "13px",
                color: "#4a2c2a",
                fontWeight: "bold",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Email / Username
            </label>
            <input
              type="text"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label
              style={{
                fontSize: "13px",
                color: "#4a2c2a",
                fontWeight: "bold",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#4a2c2a",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
