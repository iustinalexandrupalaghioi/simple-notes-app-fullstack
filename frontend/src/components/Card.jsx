import React, { useState } from "react";
import axios from "axios";

const Card = (props) => {
  return (
    <div
      className="card shadow"
      style={{ width: "18rem", height: "fit-content" }}
    >
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <div className="cta d-flex gap-2">
          <button className="btn btn-warning" onClick={props.onUpdate}>
            Update
          </button>

          <a className="btn btn-danger" onClick={props.onDelete}>
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
