import React from "react";

export const Header = () => (
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
              <a className="nav-link text-dark" asp-area="" asp-page="/Index">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" asp-area="" asp-page="/Readme">
                Readme
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
