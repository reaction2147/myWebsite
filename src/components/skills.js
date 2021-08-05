import React from "react";
import "../css/components.css";
import icon from "../icons/icon_html.svg";
import frontend from "../icons/frontend"
import Icon from "../components/icon"

const Skills = () => {

  const iconComponents = frontend.map(data => <Icon key={data.id} image={data.image} title={data.name} />)
  console.log(iconComponents)

  return (
    <>
    <section className="section ">
    <div className="title-container">
          <h1 className="title is-3 is-spaced space-right">Skills &amp; Tools</h1>
          <div className="title-line"></div>
        </div>
      <div className="tile is-ancestor">
        <div className="tile is-horizontal">
          <div className="tile is-parent ">
            <div className="tile is-child box has-background-grey has-text-centered">
              <img className="is-inline-block" src={icon} />
              <p className="has-text-black">HMTL</p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box has-background-grey has-text-centered">
              <img className="is-inline-block" src={icon} />
              <p className="has-text-white">HMTL</p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box has-background-grey has-text-centered">
              <img className="is-inline-block" src={icon} />
              <p className="has-text-white">HMTL</p>
            </div>
          </div>
         
        </div>
      </div>
      </section>
    </>
  );
};

export default Skills;
