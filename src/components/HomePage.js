import React from "react";
import "./homestyle.css";
class HomePage extends React.Component {
  render() {
    return (
      <>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "black",
            margin: "0",
            borderRadius: "0px 0px 0px 150px",
          }}
        >
          <div
            className="row"
            style={{ paddingTop: "200px", paddingBottom: "150px" }}
          >
            <div
              className="col-xs-12 col-md-6"
              style={{ textAlign: "center", paddingTop: "40px", color: "grey" }}
            >
              <h1>Hi i'm Bhupendra</h1>
              <h3>
                I am a Full Stack Developer Working from last 3 years and worked
                on many techonlogies and exploring more technologies to work on.
              </h3>
            </div>
            <div className="col-xs-12 col-md-6" style={{ textAlign: "center" }}>
              <img src="bhup.JPG"  alt="Myimage"  style={{borderRadius:20}}/>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <center>
            <h1>Featured Project</h1>
          </center>
          <hr />
          <div
            className="row"
            style={{ paddingTop: "70px", paddingBottom: "100px" }}
          >
            <div className="col-xs-12 col-md-6">
              <img
                src="project1.png"
                style={{ width: "100%" }}
                alt="projectimage"
              />
            </div>
            <div className="col-md-6 col-xs-12" style={{ textAlign: "center" }}>
              <h1>Employee Record Management System</h1>
              <h4>
              This project was designed using MEAN stack technology. The sole purpose of ERMS was to reduce the paperwork involved in the day- to-day records of the employee. Front-end part had different
interfaces for users and admin associated with that record. We
aimed to improve the way of recording the data of employees by
storing his/her education and experience information and
successfully achieved it. 
              </h4>
              <p>
                <h3>Technologies Used: </h3> HTML, CSS, JavaScript, PHP, Bootstrap, MySQL
              </p>
              <a
                href="http://bhupendra123.epizy.com/"
                target="_blank"
                className="btn btn-primary buttn"
              >
                SEE PROJECT
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ marginTop: "40px" }}>
          <center>
            <h1>Technologies Worked On</h1>
          </center>
          <hr />
          <div
            className="row"
            style={{
              paddingTop: "80px",
              paddingBottom: "80px",
              textAlign: "center",
            }}
          >
            <div className="col-xs-12 ">
              <img src="logo192.png" alt="project" />
              <h2>ReactJs</h2>
            </div>
            <div className="col-xs-12 ">
              <img src="nodelogo.png" alt="project" />

              <h2>NodeJs</h2>
            </div>
            <div className="col-xs-12 ">
              <img src="phplogo.png" alt="project" />

              <h2>PHP</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
