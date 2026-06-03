import { pingDb } from "@/lib/server/db";

export async function GET() {
  try {
    const result = await pingDb();

    return Response.json({
      ok: result?.ok === 1,
      result,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return Response.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
