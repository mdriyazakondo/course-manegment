import { getCollections } from "@/lib/collections";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return Response.json({ error: "Email is required" }, { status: 400 });
  }

  const { courseCollection } = await getCollections();
  const data = await courseCollection.find({ email }).toArray();

  return Response.json(data);
}
