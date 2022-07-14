import React, { Component, useEffect } from "react";
import "./custom.css";
import database from "./helperDatabase.json";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:5000/api/task/GetTasks", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
      mode: "no-cors",
    }).then((response) => console.log("response", response));
  }, []);

  const isNullOrWhiteSpace = (example) => {
    return (
      example === null || example == "\t" || example === " " || example === ""
    );
  };

  const stringToHTML = (str) => {
    var dom = document.createElement("div");
    dom.innerHTML = str;
    return dom;
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
          <div className="container">
            <a className="navbar-brand" asp-area="" asp-page="/Index">
              PIA.DotNet.Interview
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <a
                    className="nav-link text-dark"
                    asp-area=""
                    asp-page="/Index"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark"
                    asp-area=""
                    asp-page="/Readme"
                  >
                    Readme
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">
        <main role="main" className="pb-3">
          <div className="text-left">
            <h1 className="alert-success text-center">Tasks</h1>
            <h3>The tasks for this interview sample are as follows:</h3>
            {database.Tasks.map((task, index) => {
              return (
                <div
                  className={`card mb-3 ${task.IsFinished} ? "text-white bg-primary" : "bg-light`}
                  key={index}
                >
                  <div className="card-header">{`Task ${task.Id}`}</div>
                  <div className="card-body">
                    <h5 className="card-title">{task.Title}</h5>
                    <p className="card-text">{task.Description}</p>
                    <>
                      {!isNullOrWhiteSpace(task.Example) ? (
                        <div className="card" style={{ width: "400px" }}>
                          <img
                            className="card-img-top"
                            src={task.Example}
                            alt="Card image"
                            style={{ width: "100%" }}
                          />
                          <div className="card-footer">
                            <small className="text-muted">Example</small>
                          </div>
                        </div>
                      ) : null}
                    </>
                    <a href="#" className="btn btn-primary mt-1">
                      Erledigt
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
      <footer className="border-top footer text-muted">
        <div className="container">
          &copy; 2022 - PIA.DotNet.Interview -
          <a href="https://www.piagroup.com/">PIA Homepage</a>
        </div>
      </footer>

      <script src="~/lib/jquery/dist/jquery.min.js"></script>
      <script src="~/lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <script src="~/js/site.js" asp-append-version="true"></script>
    </>
  );
};

export default App;
