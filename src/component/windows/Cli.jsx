import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./Cli.scss";
const Cli = () => {
  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={{
            echo: {
              description: "Echo a passed string.",
              usage: "echo <string>",
              fn: (...args) => args.join(" "),
            }
          }}
          welcomeMessage={"Welcome to the react terminal!"}
          promptLabel={"gaurilokhande:~$"}
          promptLabelStyle={{color:"#00ff00"}}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
