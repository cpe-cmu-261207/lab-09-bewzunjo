import React from "react";
import Todolist from "../components/Todolist";
import MainLayout from "../layouts/MainLayout";

export default function Lab07() {
  return (
    <div>
      <MainLayout>
        <p
          className="d-flex justify-content-center my-3 fs-1"
          style={{ fontFamily: "Staatliches", color: "rgb(52, 177, 235)" }}
        >
          Lab-07
        </p>
        <Todolist />
      </MainLayout>
    </div>
  );
}