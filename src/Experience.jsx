import { useState, Reaact } from "react";
import { TbDeviceComputerCamera } from "react-icons/tb";

export default function Experience() {
  const [section, setsection] = useState("experience");
  return (
    <div className="component" id="Experience">
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
        <div className="row m-auto">
          <div className="col-md-5 col-sm-5">
            <div className="card " style={{ maxwidth: "18rem" }}>
              <h6 className="ps-3 pt-3">Software Developer</h6>
              <div className="card-body" style={{ color: "#fbfbfb" }}>
                <h5 className="card-title">TAG Assessors Guild Pvt. Ltd.</h5>
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
          <div className="col-md-2 col-sm-none text-center">
            <div
              className="mx-auto h-50"
              style={{ height: "50px", width: "2px", backgroundColor: "white" }}
            ></div>
            <TbDeviceComputerCamera size="25px" />
            <div
              className="mx-auto h-50"
              style={{ height: "50px", width: "2px", backgroundColor: "white" }}
            ></div>
          </div>
          <div className="col-md-5 col-sm-5"></div>

          <div className="col-md-5 col-sm-5"></div>

          <div className="col-md-2 col-sm-none text-center">
            <div
              className="mx-auto h-50"
              style={{ height: "50px", width: "2px", backgroundColor: "white" }}
            ></div>
            <TbDeviceComputerCamera size="25px" />
            <div
              className="mx-auto h-50"
              style={{ height: "50px", width: "2px", backgroundColor: "white" }}
            ></div>
          </div>
          <div className="col-md-5 col-sm-5">
            <div className="card " style={{ maxwidth: "18rem" }}>
              <h6 className="ps-3 pt-3">Freelancing</h6>
              <div className="card-body" style={{ color: "#fbfbfb" }}>
                <h5 className="card-title"></h5>
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
            <div className="card " style={{ maxwidth: "18rem" }}>
              <h6 className="ms-3 mt-3">Web Developer </h6>
              <div className="card-body" style={{ color: "#fbfbfb" }}>
                <h5 className="card-title">Dogma Soft Ltd.</h5>
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
          <div className="col-md-2 col-sm-2 text-center">
            <div
              className="mx-auto  h-75"
              style={{ height: "50px", width: "2px", backgroundColor: "white" }}
            ></div>
            <TbDeviceComputerCamera size="25px" />
          </div>
          <div className="col-md-5 col-sm-5"></div>
        </div>
      )}
      {/* this is education section */}
      {section === "education" && (
        <div className="row m-auto">
          <div className="col-md-5 col-sm-5">
            <div className="card m-3" style={{ maxwidth: "18rem" }}>
              <div className="card-header">B.C.A</div>
              <div className="card-body">
                <h5 className="card-title">Tag Assesor private Ltd.</h5>
                <p className="card-text"> feb 2024 - current</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 text-center">
            <div
              className="mx-auto h-50"
              style={{ height: "50px", width: "2px", backgroundColor: "white" }}
            ></div>
            <TbDeviceComputerCamera size="25px" />
            <div
              className="mx-auto h-50"
              style={{ height: "50px", width: "2px", backgroundColor: "white" }}
            ></div>
          </div>
          <div className="col-md-5 col-sm-5"></div>

          <div className="col-md-5 col-sm-5"></div>
          <div className="col-md-2 col-sm-2 text-center">
            <div
              className="mx-auto  h-75"
              style={{ height: "50px", width: "2px", backgroundColor: "white" }}
            ></div>
            <TbDeviceComputerCamera size="25px" />
          </div>
          <div className="col-md-5 col-sm-5">
            <div className="card m-3" style={{ maxwidth: "18rem" }}>
              <div className="card-header">Web Developer</div>
              <div className="card-body">
                <h5 className="card-title">Dogma Soft Ltd.</h5>
                <p className="card-text">Augest 2023 - November 2023</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
