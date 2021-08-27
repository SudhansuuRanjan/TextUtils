import React from "react";

export default function Footer() {
  return (
    <>
      <div>
        <footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position : "relative",
            bottom:"-7vh"
          }}
        >
          &copy;Sudhanshu Ranjan  |  All Rights Reserved  |  T&C
        </footer>
      </div>
    </>
  );
}