import { stackServerApp } from "../../stack";
import type { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Try both getUser({ req }) and getUser(req) depending on your Stack Auth version:
  // const user = await stackServerApp.getUser({ req });
  const user = await stackServerApp.getUser(req);

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Fetch the profile from Neon using user.id
  const result = await pool.query(
    "SELECT * FROM user_profiles WHERE user_id = $1",
    [user.id]
  );
  res.status(200).json(result.rows[0]);
}
