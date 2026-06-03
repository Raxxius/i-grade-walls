import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function pingDb() {
  const { env } = getCloudflareContext();

  return env.DB.prepare("SELECT 1 AS ok").first<{ ok: number }>();
}
