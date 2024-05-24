// import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "sqlite",
  dbCredentials: {
    url: "file:./db.sqlite",
  },
  schema: "./src/db/schema.ts",
  out: "./migrations",
});