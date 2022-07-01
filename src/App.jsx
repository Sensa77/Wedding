import React from "react";
import './utils/css-variables.scss'
import {Header} from './components/Header/index'
import { Invitation } from "./components/Invitation";
import { History } from "./components/History/History";
import { Wedding } from "./components/Wedding/Wedding";
import { Location } from "./components/Location";

const App = () => {
  return (
<div>
<Header/>
<Invitation/>
<History/>
<Wedding/>
<Location/>
</div>
  )
}

export default App