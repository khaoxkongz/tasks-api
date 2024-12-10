import { defineConfig } from "drizzle-kit";

import env from "@/env";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    token: env.TURSO_AUTH_TOKEN,
  },
});
