import db from "../db.js";

// get all notes function
const getNotes = async (req, res) => {
  const response = await db.query("SELECT * FROM notes");
  res.json(response.rows);
};
//get a note by its id function
const getNoteById = async (req, res) => {
  const response = await db.query("SELECT * FROM notes WHERE id = $1", [
    req.params.id,
  ]);
  res.json(response.rows);
};

//function to add a new note
const addNote = async (req, res) => {
  const { title, desc } = req.body;
  await db.query("INSERT INTO notes(title,description) VALUES($1,$2)", [
    title,
    desc,
  ]);
  res.json("Post added succesfully.");
};

//function to delete a note by its id
const deleteNote = async (req, res) => {
  const response = await db.query("DELETE FROM notes WHERE id = $1", [
    req.params.id,
  ]);
  res.json(response);
};

//function to edit a note by its id
const updateNote = async (req, res) => {
  const response = await db.query(
    "UPDATE notes SET title = $1, description = $2  WHERE id = $3",
    [req.body.title, req.body.description, req.params.id]
  );
  res.json(response);
};
export default getNotes;
export { getNoteById, addNote, deleteNote, updateNote };
