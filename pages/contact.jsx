import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function contact() {
  return (
    <div>
      <MainLayout>
        <p
          class="vstack gap-2 border border-2 rounded-3 p-2 mx-auto"
          style={{width: "60%"}}>
          Contact Me
        </p>
        <div className="hstack gap-4" style={{ width: "75%" }}>
          <img src="pic.jpg" style={{ width: "100px" ,height:"100px"}} className="rounded-circle"/>
          <div
            className="d-flex flex-column my-auto mx-3 fs-5"
            style={{ fontFamily: "Prompt", color: "rgb(127, 23, 228)" }}
          >
            <p className="d-flex gap-5 mb-1">
              <span className="fw-bold">Name</span>
              <span>Saran Kimanuwat</span>
            </p>
            <p className="d-flex gap-2 mb-1">
              <span className="fw-bold">Nickname</span>
              <span>Bew</span>
            </p>
            <p className="d-flex gap-4 mb-1">
              <span className="fw-bold">Address</span>
              <span>
               Chonburi
              </span>
            </p>
            <p className="d-flex gap-2 mb-1">
              <span className="fw-bold">Facebook</span>
              <a
                href="//www.facebook.com/profile.php?id=100003830136243"
                target="_blank"
                style={{color: "rgb(87, 87, 87)" }}
                rel="noreferrer"
              >
                www.facebook.com/profile.php?id=100003830136243
              </a>
            </p>
            <p className="d-flex gap-5 mb-1">
              <span className="fw-bold">Email</span>
              <a href="mailto:saran_kim@cmu.ac.th">
              saran_kim@cmu.ac.th
              </a>
            </p>
            <p className="d-flex gap-5 mb-1">
              <span className="fw-bold">Phone</span>
              <span>0653245993</span>
            </p>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}