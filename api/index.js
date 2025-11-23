require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URI);
let db, userCollection, courseCollection, enrollmentCollection; // add collections

async function connectDB() {
  await client.connect();
  db = client.db("courseDB");

  // initialize collections
  userCollection = db.collection("users");
  courseCollection = db.collection("courses");
  enrollmentCollection = db.collection("enrollments");

  console.log("MongoDB Connected");
}
connectDB();

// ----------- Courses Routes ---------------

// Get latest courses
app.get("/api/latest", async (req, res) => {
  const data = await courseCollection
    .find()
    .sort({ created_at: -1 })
    .limit(6)
    .toArray();
  res.send(data);
});

// Get all courses

app.get("/api/courses", async (req, res) => {
  const data = await courseCollection.find().sort({ created_at: -1 }).toArray();
  res.send(data);
});

app.get("/api/courses/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await courseCollection.findOne(query);
  res.send(result);
});

// Create course
app.post("/api/courses", async (req, res) => {
  const newCourse = req.body;
  newCourse.created_at = new Date();
  const result = await courseCollection.insertOne(newCourse);
  res.send(result);
});

app.put("/api/courses/:id", async (req, res) => {
  const id = req.params.id;
  const updateUser = req.body;
  const query = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: {
      title: updateUser.title,
      category: updateUser.category,
      instructor: updateUser.instructor,
      duration: updateUser.duration,
      level: updateUser.level,
      price: updateUser.price,
      image: updateUser.image,
      description: updateUser.description,
    },
  };
  const result = await courseCollection.updateOne(query, updateDoc);
  res.send(result);
});

app.delete("/api/courses/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await courseCollection.deleteOne(query);
  res.send(result);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
