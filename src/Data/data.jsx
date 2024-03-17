import React, { createContext, useState } from "react"; // Correct import

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

export const BoxDataContext = createContext();

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

export const BoxDataProvider = ({ children }) => {
  // Renamed from boxdataprovider to BoxDataProvider
  const [boxdata, setboxdata] = useState(box);

  return (
    <BoxDataContext.Provider value={{ boxdata, setboxdata }}>
      {children}
    </BoxDataContext.Provider>
  );
};
