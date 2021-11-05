import React from "react";
import "./App.css";
import Anime from "./components/Anime/Anime";
import Community from "./components/Community/Community";
import DevelopmentRoadmap from "./components/DevelopmentRoadmap/DevelopmentRoadmap";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import LaunchRoad from "./components/LaunchRoad/LaunchRoad";
import Metaverse from "./components/Metaverse/Metaverse";
import MintComponent from "./components/MintComponent/MintComponent";
import Navbar from "./components/Navbar/Navbar";
import Story from "./components/Story/Story";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MintComponent />
      <Metaverse />
      <Story />
      <FAQ />
      <LaunchRoad />
      <DevelopmentRoadmap />
      <Anime />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
