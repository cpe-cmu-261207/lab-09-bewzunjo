import React from "react";
import Navbar from "../components/Navbar";

export default function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <div className="card mx-auto mb-5" style={{ width: "70%" }}>
        {props.children}
      </div>
    </div>
  );
}