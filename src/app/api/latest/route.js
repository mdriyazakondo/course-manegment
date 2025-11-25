import { getCollections } from "@/lib/collections";

export async function GET() {
  const { courseCollection } = await getCollections();

  const data = await courseCollection
    .find()
    .sort({ created_at: -1 })
    .limit(6)
    .toArray();

  return Response.json(data);
}
