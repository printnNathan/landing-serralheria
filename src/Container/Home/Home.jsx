import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sobre from "../../Components/Sobre/Sobre"
import Habilidades from "../../Components/Habilidades/Habilidades";


function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Sobre></Sobre>
        <Habilidades></Habilidades>
        <h1>Home</h1>
    </div>
  );
}

export default Home;



