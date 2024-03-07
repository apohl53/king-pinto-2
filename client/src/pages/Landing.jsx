import React from "react";
import Gallery from "./Gallery";
import Mural from "./Mural";

function Landing() {
  return (
    <>
      <section className="text-center pt-5">
        <h1>Gallery</h1>
        <Gallery />

        <h1>Mural</h1>
        <Mural />
      </section>
    </>
  );
}

export default Landing;
