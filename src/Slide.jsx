import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

function Slide() {
  const box = [
    {
      icon: <FaReact size="50" />,
      text: "React ",
    },
    {
      icon: <FaNodeJs size="50" />,
      text: "Node",
    },
    {
      icon: <FaLaravel size="50" />,
      text: "Laravel",
    },
    {
      icon: <RiJavascriptFill size="50" />,
      text: "Javascript",
    },
    {
      icon: <FaPhp size="50" />,
      text: "PHP",
    },
    {
      icon: <FaBootstrap size="50" />,
      text: "Bootstrap",
    },
    {
      icon: <FaGitAlt size="50" />,
      text: "Git",
    },
    {
      icon: <FaGithub size="50" />,
      text: "Github ",
    },
  ];

  return (
    <div className="component" id="Skill">
      <h1>Skills</h1>
      <h4>
        Always <span>Willing</span>, Always <span>Able</span>.
      </h4>
      <div className="row pt-3">
        {box.map((item, index) => (
          <div className="col-md-3" key={index}>
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
