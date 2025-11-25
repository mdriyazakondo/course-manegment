import clientPromise from "./db";

export async function getCollections() {
  const client = await clientPromise;
  const db = client.db("courseDB");

  return {
    userCollection: db.collection("users"),
    courseCollection: db.collection("courses"),
    enrollmentCollection: db.collection("enrollments"),
  };
}
