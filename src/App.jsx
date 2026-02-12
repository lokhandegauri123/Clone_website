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

  const [windowState, setWindowState] = useState({
    Github : false,
    Note : false,
    Resume:false,
    Spotify : false,
    Cli : false,
  })
  return (
    <>
      <main className="app">
        <Nav />
        <Dock  windowState={windowState} setWindowState={setWindowState}/>
        {windowState.Github && <Github windowName = "Github" windowState={windowState} setWindowState={setWindowState}/>}
        {windowState.Note && <Note windowName = "Note" windowState={windowState} setWindowState={setWindowState}/>}
        {windowState.Resume && <Resume windowName = "Resume" windowState={windowState} setWindowState={setWindowState}/>}
        {windowState.Spotify && <Spotify windowName = "Spotify" windowState={windowState} setWindowState={setWindowState}/>}
        {windowState.Cli && <Cli windowName = "Cli" windowState={windowState} setWindowState={setWindowState}/>} 
      </main>
    </>
  );
}

export default App;
