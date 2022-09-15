import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="text-bg-dark">
      <div class="d-flex mx-auto align-items-center" style={{ width: "60%" }}>
        <div class="hstack gap-4">
        <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/experience">
        <a>Experience</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/lab-07">
        <a>Lab-07</a>
      </Link>
          <hr />
        </div>
      </div>
      
    </div>
  );
}