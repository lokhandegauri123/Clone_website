import { Children, useState } from "react";
// import reactLogo from './assets/react.svg'
import "./app.scss";
import Dock from "./component/Dock";
import Nav from "./component/Nav";
import { Rnd } from "react-rnd";
import Github from "./component/windows/Github";
import Note from "./component/windows/Note";
import Resume from "./component/windows/Resume";
// import MacWindow from './component/windows/MacWindow'
import Spotify from "./component/windows/Spotify";
import Cli from "./component/windows/Cli";

function App() {
  return (
    <>
      <main className="app">
        <Nav />
        <Dock />
        <Github />
        {/* <MacWindow children="kdsffj"/> */}
        {/* <h1 >hello</h1>    */}
        <Note />
        <Resume />
        <Spotify/>
        <Cli/> 
      </main>
    </>
  );
}

export default App;
