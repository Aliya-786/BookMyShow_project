import React from "react";
import { useNavigate } from "react-router-dom";
import { useColors } from "../Utils/Colors";

const SelectCity = () => {
  const navigate = useNavigate();
  const colors = useColors;

  const handleContinue = () => {
    navigate("/movies");
  };

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: colors.white,
      }}
    >
      <h1 style={{ color: colors.primary, textAlign: "center" }}>
        Select Your City
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <button
          onClick={handleContinue}
          style={{
            backgroundColor: colors.primary,
            color: colors.white,
            border: "none",
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Continue to Movies
        </button>
      </div>
    </div>
  );
};

export default SelectCity;
