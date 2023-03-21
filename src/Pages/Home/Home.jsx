import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Header/Navbar.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
         
          textAlign: "center",
        }}
      >
        <h2>Home</h2>
      </div>
      <Footer />
    </>
  );
}

export default Home;
