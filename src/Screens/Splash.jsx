import React from "react";
import { useNavigate } from "react-router-dom";
import bookshowlogo from "../assets/bookshowlogo.png";
import { useColors } from "../Utils/Colors";

const Splash = () => {
  const navigate = useNavigate();
  const colors = useColors;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/select-city");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={bookshowlogo}
        alt="book show logo"
        style={{ maxWidth: "80%", maxHeight: "80%" }}
      />
    </div>
  );
};

export default Splash;
