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

const App = () => {
  return (
    <div>
      <Header />
      <Invitation />
      <History />
      <Wedding />
      <Location />
      <Gallery />
      <Memory />
      <Footer />
    </div>
  );
};

export default App;
