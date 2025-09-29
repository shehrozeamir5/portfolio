import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}));
  // In production, plug this into an email/SaaS (e.g., Resend, SendGrid) or DB.
  console.log("New contact submission:", data);
  return NextResponse.json({ ok: true });
}
