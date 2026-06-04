// app/api/db/route.ts
import { getDb } from "@/lib/server/db/db";
import { usersTable } from "@/lib/server/db/schema";

export async function GET() {
  const db = getDb();
  const users = await db.select().from(usersTable).all();

  return Response.json(users);
}