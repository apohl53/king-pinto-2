import React from "react";
import "../styles/mural.scss"
export default function Mural() {
  return (
    <section
      id="mural"
      style={{ padding: "10px", 
    color: "yellow"}}
      
      className="flex flex-col min-h-screen"
    >
      <main className="flex-1 p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <h1 className="text-2xl font-bold">Murals</h1>
        <img 
          alt="Mural 1"
          className="text-center"
          src="/client/src/assets/art2.jpg"
          />
          
        
      </main>
    </section>
  );
}
