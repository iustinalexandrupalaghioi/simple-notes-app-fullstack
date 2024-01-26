import express from "express";
import getNotes, {
  getNoteById,
  addNote,
  deleteNote,
  updateNote,
} from "../controllers/notes.js";

const router = express.Router();

// endpoint to get all notes -- home page
router.get("/", getNotes);

//endpoint to get a note by its Id
router.get("/:id", getNoteById);

//endpoint to create a new note
router.post("/create", addNote);

//endpoint to delete a note by its id
router.delete("/delete/:id", deleteNote);

//endpoint to update a note by its id
router.patch("/update/:id", updateNote);

export default router;
