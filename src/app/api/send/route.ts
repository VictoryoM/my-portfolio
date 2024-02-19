import { EmailSend } from "@/app/components/EmailSend";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  if (!email || !subject || !message) {
    return new Response("Missing required fields", { status: 400 });
  }
  try {
    const data = await resend.emails.send({
      from: fromEmail!,
      to: [fromEmail, email],
      subject: subject,
      react: EmailSend({ subject, message }),
      text: "E-Invoice DragonSteel",
    });
    return new Response("Email sent", { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
