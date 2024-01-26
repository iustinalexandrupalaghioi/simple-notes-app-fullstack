import React from "react";

const Header = () => {
  return (
    <div className="container-fluid  p-2 bg-light d-flex justify-content-center">
      <ul>
        <a className="btn btn-success me-5" href="/">
          Home Page
        </a>
        <a className="btn btn-success" href="/notes/create">
          Add New Note
        </a>
      </ul>
    </div>
  );
};

export default Header;
