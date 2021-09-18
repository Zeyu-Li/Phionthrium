import React, { useEffect, useState } from "react";

export const About = () => {
  const ideas = [
    "Open Source",
    "World Changing",
    "Non-profit",
    "Crypto Inspired",
    "Inspiring",
    "Wacky off the rocker",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % ideas.length);
    }, 2500);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="aboutInfo1">
        <div style={{display: "flex" ,justifyContent: "center", alignItems: "center"}}>
          <p>
            Crowdfund your <br /> <strong>{ideas[index]}</strong> ideas
          </p>
        </div>
        <div>
          <img src={'landingIcon.svg'} alt="abstract art" style={{width: "50vw"}} />
        </div>
      </div>
      <div className="aboutInfo2" id="about">
        {/* <div className="imgTextContainer">
          <img src="page512.png" alt="page" width="512px"/>
          <p id="pageText">
            Sugma:
            <br />
            The new all in one program
            <br /> to do all the things that suck
          </p>
        </div> */}
        <div style={{display: "flex" ,justifyContent: "center", alignItems: "center"}}>
          <img src="page512.png" alt="page" width="512px"/>
        </div>
        <div>
          <h2>
            Bring your ideas to <br/>life with a proposal.
          </h2>
          <h3 style={{fontWeight: "normal"}}>
            Submit it to the <br/>blockchain 🔗
          </h3>
        </div>
      </div>
    </div>
  );
};
