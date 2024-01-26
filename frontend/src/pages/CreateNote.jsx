import React from "react";
import CreateNoteForm from "../components/CreateNoteForm";

const CreateNote = () => {
  return (
    <div className="container d-flex flex-column my-5 align-items-center min-vh-100">
      <h1 className="mb-5">Add a New Note For You</h1>
      <CreateNoteForm />
    </div>
  );
};

export default CreateNote;
