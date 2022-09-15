import React from "react";

export default function Card(props) {
  return (
    <div className="card mb-3" style={{ minHeight: "125px" }}>
      <div className="d-flex">
        <img
          src={props.imgsrc}
          className="imgcard rounded-start"
          style={{ height: "125px", maxWidth: "200px" }}
        />
        <div className="d-flex flex-column my-auto mx-3">
          <p className="my-0" style={{ fontFamily: "Prompt", color: "black" }}>
            {props.title}
          </p>
          <p
            className="my-0"
            style={{ fontFamily: "Prompt", color: "rgb(123, 214, 25)" }}
          >
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}