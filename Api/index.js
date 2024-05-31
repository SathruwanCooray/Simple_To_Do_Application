const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const CONNECTION_STRING = 'mongodb+srv://Admin:12345@cluster0.jdx6olu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DATABASENAME = "ToDoApplicationDb";

let database;

app.listen(5038, async () => {
  try {
    const client = new MongoClient(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    database = client.db(DATABASENAME);
    console.log("MongoDB Connection Successful");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
  }
});

// Middleware to handle form data
const upload = multer();

// Add a note
app.post("/api/addNotes", upload.none(), async (request, response) => {
  try {
    const collection = database.collection("ToDoNotes");

    // Count the number of documents in the collection
    const numOfDocs = await collection.countDocuments({});

    // Insert the new note
    await collection.insertOne({
      id: (numOfDocs + 1).toString(),
      description: request.body.newNotes
    });

    response.json("Added Successfully");
  } catch (error) {
    console.error("Error adding document:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

// Retrieve all notes
app.get("/api/getnotes", async (req, res) => {
  try {
    const collection = database.collection("ToDoNotes");
    const notes = await collection.find({}).toArray();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error retrieving documents:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a note
app.delete("/api/deletenotes", async (request, response) => {
  try {
    const collection = database.collection("ToDoNotes");

    // Delete the note with the specified id
    const result = await collection.deleteOne({
      id: request.query.id
    });

    if (result.deletedCount === 1) {
      response.json("Delete Successful");
    } else {
      response.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    console.error("Error deleting document:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});
