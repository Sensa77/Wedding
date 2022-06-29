import React from "react";
import './utils/css-variables.scss'
import {Header} from './components/Header/index'
import { Invitation } from "./components/Invitation";

const App = () => {
  return (
<div>
<Header/>
<Invitation/>
</div>
  )
}

export default App