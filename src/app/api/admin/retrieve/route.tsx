import {NextResponse} from "next/server";
import {sql} from "@vercel/postgres";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const passphrase = url.searchParams.get("passphrase");

  if (!passphrase || passphrase != process.env.ADMIN_PASSPHRASE)
  {
    console.log("passphrase bad")
    return NextResponse.json({error: "Unknown Passphrase"}, {status: 403})
  }

  try {
    const { rows } = await sql`select * from cdwm.registrations`;

    return NextResponse.json({ rows: rows }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving rows ", error);
    return NextResponse.json({ error: `Error retrieving rows: ${error}` }, { status: 500 });
  }
}