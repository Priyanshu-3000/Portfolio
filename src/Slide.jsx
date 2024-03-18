import { useEffect, useContext } from "react";
import { BoxDataContext } from "./Data/data";
import anime from "animejs/lib/anime.es.js";

function Slide() {
  const { boxdata } = useContext(BoxDataContext);

  useEffect(() => {
    const skill = anime({
      targets: ".skill",
      left: "240px",
      borderRadius: ["0%", "50%"],
      easing: "easeInOutQuad",
    });
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="component" id="Skill">
      <h1>Skills</h1>
      <h4>
        Always <span>Willing</span>, Always <span>Able</span>.
      </h4>
      <div className="row pt-3">
        {boxdata.map((item, index) => (
          <div className="col-3" key={index}>
            <div className="p-5 skill">
              <div>{item.icon}</div>
              <div>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slide;
