import { getCollections } from "@/lib/collections";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = params;
  const { courseCollection } = await getCollections();

  const course = await courseCollection.findOne({ _id: new ObjectId(id) });
  return Response.json(course);
}

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();

  const { courseCollection } = await getCollections();

  const result = await courseCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: body }
  );

  return Response.json(result);
}

export async function DELETE(req, { params }) {
  const { id } = params;
  const { courseCollection } = await getCollections();

  const result = await courseCollection.deleteOne({ _id: new ObjectId(id) });

  return Response.json(result);
}
