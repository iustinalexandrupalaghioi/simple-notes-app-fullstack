import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/api/notes/create",
      inputs
    );
    setInputs({ title: "", desc: "" });
    navigate("/");
  };

  return (
    <div className="form w-50">
      <form className=" d-flex flex-column gap-2">
        <div className="form-floating shadow  bg-body-tertiary rounded">
          <input
            name="title"
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Add new task here..."
            onChange={handleChange}
            value={inputs.title}
          />
          <label htmlFor="floatingInput">New Note</label>
        </div>
        <div className="form-floating shadow  bg-body-tertiary rounded">
          <textarea
            style={{ height: "100px" }}
            className="form-control"
            name="desc"
            id="floatingTextarea"
            placeholder="Description"
            onChange={handleChange}
            value={inputs.desc}
          ></textarea>
          <label htmlFor="floatingTextarea">Describe your Note</label>
        </div>

        <button
          className="btn btn-primary w-25 align-self-end shadow"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
