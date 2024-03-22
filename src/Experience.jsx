import { useState, Reaact } from "react";
import { TbDeviceComputerCamera } from "react-icons/tb";

const Experience = ({ isDarkMode }) => {
  const [section, setsection] = useState("experience");
  return (
    <div className="component p-5" id="Experience">
      <div className="pb-5">
        <button
          className={
            section === "experience" ? "btn btn-light" : "btn btn-dark"
          }
          onClick={() => {
            setsection("experience");
          }}
        >
          Experience
        </button>
        <button
          className={section === "education" ? "btn btn-light" : "btn btn-dark"}
          onClick={() => {
            setsection("education");
          }}
        >
          Education
        </button>
      </div>
      {/* this is expriance section */}
      {section === "experience" && (
        <div className={`row m-auto`}>
          <div className="col-md-5 col-sm-5">
            <div
              className={`card mb-5 ${
                isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              <div className="card-body">
                <h5>Software Developer</h5>
                <h3 className="card-title">TAG Assessors Guild Pvt. Ltd.</h3>
                <p className="card-text">Febuary 2024 - Present</p>

                <li>
                  Developed multiple projects collaboratively with clients,
                  highlighting strong communication skills.
                </li>
                <li>
                  Contributed to team-based and individual projects,
                  demonstrating adaptability and independence.
                </li>
              </div>
              <p className="ms-3 mb-3 card-text">
                Skills: React, NextJs, Node, ExpressJS, MongoDB, Mongus
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-none  d-none d-sm-block text-center">
            <div
              className={`mx-auto h-50 ${isDarkMode ? "bg-light" : "bg-dark "}`}
              style={{ height: "50px", width: "2px" }}
            ></div>

            <TbDeviceComputerCamera className="mx-auto" size="25px" />
            <div
              className={`mx-auto h-50  ${
                isDarkMode ? "bg-light" : "bg-dark "
              }`}
              style={{ height: "50px", width: "2px" }}
            ></div>
          </div>
          <div className="col-md-5 col-sm-5"></div>

          <div className="col-md-5 col-sm-5"></div>

          <div className="col-md-2 col-sm-none d-none d-sm-block text-center">
            <div
              className={`mx-auto h-50  ${
                isDarkMode ? "bg-light" : "bg-dark "
              }`}
              style={{ height: "50px", width: "2px" }}
            ></div>
            <TbDeviceComputerCamera className="mx-auto " size="25px" />
            <div
              className={`mx-auto h-50 ${isDarkMode ? "bg-light" : "bg-dark "}`}
              style={{ height: "50px", width: "2px" }}
            ></div>
          </div>
          <div className="col-md-5 col-sm-5">
            <div
              className={`card mb-5 ${
                isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              <div className="card-body">
                <h4>Freelancing</h4>
                <p className="card-text">November 2023 - Febuary 2024</p>

                <li>
                  Developed multiple projects collaboratively with clients,
                  highlighting strong communication skills.
                </li>
                <li>
                  Contributed to team-based and individual projects,
                  demonstrating adaptability and independence.
                </li>
              </div>
              <p className="ms-3 mb-3 card-text">
                Skills: React, NextJs, Node, ExpressJS, MongoDB, Mongus
              </p>
            </div>
          </div>
          <div className="col-md-5 col-sm-5">
            <div
              className={`card mb-5 ${
                isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              <div className="card-body">
                <h5>Web Developer </h5>
                <h3 className="card-title">Dogma Soft Ltd.</h3>
                <p className="card-text">Augest 2023 - November 2023</p>

                <li>
                  Led the development of innovative web projects, turning client
                  ideas into highly effective and user-friendly websites.
                </li>
                <li>
                  Enhanced and modernized existing websites, significantly
                  improving usability and performance.
                </li>
              </div>
              <p className="ms-3 mb-3 card-text">
                Skills: Laravel, Ajex, Bootstrap, MySQL
              </p>
            </div>
          </div>
          <div className="col-md-2 d-none d-sm-block col-sm-2 text-center">
            <div
              className={`mx-auto h-50  ${
                isDarkMode ? "bg-light" : "bg-dark "
              }`}
              style={{ height: "50px", width: "2px" }}
            ></div>{" "}
            <TbDeviceComputerCamera size="25px" />
          </div>
          <div className="col-md-5 col-sm-5"></div>
        </div>
      )}
      {/* this is education section */}
      {section === "education" && (
        <div className="row m-auto">
          <div className="col-md-5 col-sm-5">
            <div
              className={`card mb-5 ${
                isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              <div className="card-body">
                <h5>Undergraduate Studies (Bachelor's Degree)</h5>
                <h3>B.C.A (Bachelor of Computer Applications)</h3>
                <h4 className="card-title">Suresh Gyan Vihar University</h4>
                <p className="card-text"> August 2021 - July 2024</p>
                <p className="fs-5">
                  Continuing my academic journey at University, I focused my
                  studies on web and app development. Throughout my
                  undergraduate years, I delved deep into languages such as
                  JavaScript (JS), PHP, and MySQL, gaining practical experience
                  through various projects and activities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-none d-none d-sm-block text-center">
            <div
              className={`mx-auto h-50  ${
                isDarkMode ? "bg-light" : "bg-dark "
              }`}
              style={{ height: "50px", width: "2px" }}
            ></div>

            <TbDeviceComputerCamera className="mx-auto" size="25px" />
            <div
              className={`mx-auto h-50  ${
                isDarkMode ? "bg-light" : "bg-dark "
              }`}
              style={{ height: "50px", width: "2px" }}
            ></div>
          </div>
          <div className="col-md-5 col-sm-5"></div>

          <div className="col-md-5 col-sm-5"></div>
          <div className="col-md-2 col-sm-none d-none d-sm-block text-center">
            <div
              className={`mx-auto h-50  ${
                isDarkMode ? "bg-light" : "bg-dark "
              }`}
              style={{ height: "50px", width: "2px" }}
            ></div>
            <TbDeviceComputerCamera size="25px" />
          </div>
          <div className="col-md-5 col-sm-5">
            <div
              className={`card mb-5 ${
                isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              <div className="card-body">
                <h5>High School (Till 12th Grade)</h5>
                <h3></h3>
                <h4 className="card-title">Jaipur Ambridge Academy</h4>
                <p className="card-text">July 2021</p>
                <p className="fs-5">
                  During my secondary education I cultivated a profound interest
                  in computer science, particularly in programming languages.
                  Through focused study during the 11th and 12th grades, I
                  acquired foundational knowledge in languages such as C and
                  C++, laying a solid groundwork for my subsequent academic
                  pursuits
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
