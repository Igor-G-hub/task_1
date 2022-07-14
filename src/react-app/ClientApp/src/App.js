import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import "./custom.css";

const App = () => {
  const getTaskApiUrl = "http://localhost:5001/api/task/GetTasks";
  const deleteTaskApiUrl = "http://localhost:5001/api/Task/DeleteTask";
  const host = window.location.host;

  const [taskCollection, setTaskCollection] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(getTaskApiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTaskCollection(data))
      .catch((err) => console.log("err", err));
  };

  const deleteTask = (id, title, description, isfinished, example) => {
    const data = { id, title, description, isfinished, example };
    fetch(deleteTaskApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/problem+json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result) {
          const newTaskCollection = taskCollection.filter(
            (task) => task.id !== id
          );
          setTaskCollection(newTaskCollection);
        }
      })
      .catch((err) => console.log("err", err));
  };

  // couldn't find api to get existing images for each task

  // const fetchImage = async (example) => {
  //   const result = await fetch(`http://${host}/${example}`, {
  //     method: "GET",
  //   })
  //     .then((res) => res)
  //     .catch((err) => null);
  //   return result;
  // };

  const isNullOrWhiteSpace = (example) => {
    return (
      example === null || example == "\t" || example === " " || example === ""
    );
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
            {taskCollection &&
              taskCollection.map((task, index) => {
                return (
                  <div
                    className={`card mb-3 ${task.isFinished} ? "text-white bg-primary" : "bg-light`}
                    key={index}
                  >
                    <div className="card-header">{`Task ${task.id}`}</div>
                    <div className="card-body">
                      <h5 className="card-title">{task.title}</h5>
                      <div className="card-text">{parse(task.description)}</div>
                      <>
                        {!isNullOrWhiteSpace(task.example) ? (
                          <div className="card" style={{ width: "400px" }}>
                            <img
                              className="card-img-top"
                              // src={fetchImage(task.example)}
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
                      <a
                        href="#"
                        className="btn btn-primary mt-1 ml-3"
                        style={{ marginLeft: "10px" }}
                        onClick={() =>
                          deleteTask(
                            task.id,
                            task.title,
                            task.description,
                            task.isFinished,
                            task.example
                          )
                        }
                      >
                        Löschen
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
