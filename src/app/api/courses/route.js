import { getCollections } from "@/lib/collections";

export async function GET() {
  const { courseCollection } = await getCollections();
  const data = await courseCollection.find().sort({ created_at: -1 }).toArray();
  return Response.json(data);
}

export async function POST(req) {
  const newCourse = await req.json();
  newCourse.created_at = new Date();

  const { courseCollection } = await getCollections();
  const result = await courseCollection.insertOne(newCourse);

  return Response.json(result);
}
