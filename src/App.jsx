import React from "react";
import "./utils/css-variables.scss";
import { Header } from "./components/Header/index";
import { Invitation } from "./components/Invitation";
import { History } from "./components/History/History";
import { Wedding } from "./components/Wedding/Wedding";
import { Location } from "./components/Location";
import { Gallery } from "./components/Gallery/Gallery";
import { Memory } from "./components/Memory/Memory";
import { Footer } from "./components/Footer/Footer";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div>
      <Element name="header">
        <Header />
      </Element>
      <Invitation />
      <Element name="history">
        <History />
      </Element>
      <Element name="wedding">
        <Wedding />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>
      <Element name="memory">
        <Memory />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
