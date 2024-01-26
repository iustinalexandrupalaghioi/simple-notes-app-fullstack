import React from "react";
import { useParams } from "react-router-dom";
import UpdateNoteForm from "../components/UpdateNoteForm.jsx";

const UpdateNote = () => {
  const { id } = useParams();
  return (
    <div className="container d-flex flex-column  align-items-center min-vh-100 my-5">
      <h1 className="mb-5">Edit note with id: {id} </h1>
      <UpdateNoteForm />
    </div>
  );
};

export default UpdateNote;
