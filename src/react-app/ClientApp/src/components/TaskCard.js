import React from "react";
import parse from "html-react-parser";
import { isNullOrWhiteSpace } from "./../helper";

export const TaskCard = ({ task, handleDeleteTask }) => {
  return (
    <div
      className={`card mb-3 ${task.isFinished} ? "text-white bg-primary" : "bg-light`}
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
        <button className="btn btn-primary mt-1">Erledigt</button>
        <button
          className="btn btn-primary mt-1 ml-3"
          style={{ marginLeft: "10px" }}
          onClick={() =>
            handleDeleteTask(
              task.id,
              task.title,
              task.description,
              task.isFinished,
              task.example
            )
          }
        >
          Löschen
        </button>
      </div>
    </div>
  );
};
