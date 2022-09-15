import React from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

export default function experience() {
  return (
    <div>
      <MainLayout>
        <p
          className="d-flex justify-content-center my-3 fs-1"
          style={{ fontFamily: "Staatliches", color: "rgb(52, 177, 235)" }}
        >
          Experience
        </p>
        <div className="mx-auto mb-5" style={{ width: "60%" }}>
          <Card
            imgsrc="/cpp.png"
            title="C++"
            text="I can programimg C++."
          />
          <Card
            imgsrc="/robo.jpg"
            title="Robotic"
            text="Robotic When i at high school. Gifted computer teached me about
              robotic and sent me to many robotic contests I was passed some
              contests and got rewards."
          />
          <Card
            imgsrc="/bike.jpg"
            title="Bike"
            text="I can ride a bicycle with no hand."
          />
        </div>
      </MainLayout>
    </div>
  );
}