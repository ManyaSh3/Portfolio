import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",  // Uses Resend's default domain for now
      to: "manyasharma0309@gmail.com",  // Replace with your actual email
      subject: `New Contact Message: ${subject}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
      reply_to: email,  // Allows you to directly reply to the sender
    });

    return Response.json({ success: true, response });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
