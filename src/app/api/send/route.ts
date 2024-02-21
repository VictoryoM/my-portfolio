import { EmailSend } from "@/app/components/EmailSend";
import { EmailValidator } from "@/lib/validators/email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request) {
  const body = await req.json();
  const { email, subject, message } = EmailValidator.parse(body);
  console.log(email, subject, message);
  if (!email || !subject || !message) {
    return new Response("Missing required fields", { status: 400 });
  }
  try {
    const data = await resend.emails.send({
      from: fromEmail!,
      to: ["victoryosin@gmail.com", email],
      subject: subject,
      react: EmailSend({ subject, message }),
      text: "E-Invoice DragonSteel",
    });
    return new Response("Email sent", { status: 200 });
  } catch (error) {
    return new Response("Email not sent", { status: 500 });
  }
}
