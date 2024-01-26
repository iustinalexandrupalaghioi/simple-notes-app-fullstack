import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = (props) => {
  const navigate = useNavigate();
  const [item, setItem] = useState({ title: "", desc: "" });
  const { id } = useParams();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/notes/${id}`
        );
        setItem({
          title: response.data[0].title,
          description: response.data[0].description,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:8000/api/notes/update/${id}`, item);
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
            value={item.title}
          />
          <label htmlFor="floatingInput">Note title</label>
        </div>
        <div className="form-floating shadow  bg-body-tertiary rounded">
          <textarea
            style={{ height: "100px" }}
            className="form-control"
            name="description"
            id="floatingTextarea"
            placeholder="Description"
            onChange={handleChange}
            value={item.description}
          ></textarea>
          <label htmlFor="floatingTextarea">Note description</label>
        </div>

        <button
          className="btn btn-primary w-25 align-self-end shadow"
          onClick={handleSubmit}
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
