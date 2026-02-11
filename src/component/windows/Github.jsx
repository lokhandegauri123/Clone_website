import React from "react";
import MacWindow from "./MacWindow";
import GithubData from "../../assets/github.json";
import './Github.scss'

const Gitcard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    desc: "",
    tags: [],
    repolink: "",
    demolink: "",
  },
}) => {
  return (
    <div className="card">
      <img src= {data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="desc">{data.desc}</p>

      <div className="tags">
        {data.tags.map((tag,ind) => 
          <p className="tag" key={ind}>{tag}</p>
        )}
      </div>

      <div className="urls">
        <a href={data.repolink}>Repository</a>
        <a href={data.demolink}>Demo Link</a>
      </div>
    </div>
  );
};
const Github = () => {
  return <MacWindow>
    <div className="cards">
        {GithubData.map((project)=>{
           return <Gitcard key={project.id} data={project}/>
        })}
    </div>
  </MacWindow>;
};

export default Github;
