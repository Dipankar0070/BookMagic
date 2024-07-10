import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebooks from "../components/Freebooks";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Freebooks />
        {/* <Cardss/> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
