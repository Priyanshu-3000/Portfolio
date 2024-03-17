import { useContext } from "react";
import { BoxDataContext } from "./Data/data";

function Slide() {
  const { boxdata } = useContext(BoxDataContext);
  return (
    <div className="component" id="Skill">
      <h1>Skills</h1>
      <h4>
        Always <span>Willing</span>, Always <span>Able</span>.
      </h4>
      <div className="row pt-3">
        {boxdata.map((item, index) => (
          <>
            <div className="col-3" key={index}>
              <div className="p-5">
                <div>{item.icon}</div>
                <div>{item.text}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Slide;
