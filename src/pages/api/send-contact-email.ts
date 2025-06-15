// src/pages/api/send-contact-email.ts (最终版 - 无 dotenv)
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// 告诉 Astro，这个端点是服务器端渲染的
export const prerender = false;

// 直接从 Astro 的运行时环境中获取环境变量
const resendApiKey = import.meta.env.RESEND_API_KEY;
const toEmail = import.meta.env.CONTACT_FORM_RECEIVER_EMAIL;
const fromEmail = import.meta.env.CONTACT_FORM_SENDER_EMAIL;

// 启动时检查关键配置是否存在
if (!resendApiKey || !toEmail || !fromEmail) {
  throw new Error("FATAL ERROR: Missing Resend environment variables. Please check your hosting provider's settings.");
}

const resend = new Resend(resendApiKey);

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), { status: 405 });
  }

  try {
    const data = await request.formData();
    const name = (data.get('name') as string) || 'Anonymous';
    const email = data.get('email') as string;
    const subject = (data.get('subject') as string) || 'No Subject';
    const message = data.get('message') as string;

    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Email and message are required." }), { status: 400 });
    }

    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `[Jaideepas Contact Form] ${subject}`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333;">New Message from Jaideepas.com</h2>
          <div style="background-color: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error({ error });
      return new Response(JSON.stringify({ error: 'Failed to send message due to a server error.' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: 'Message sent successfully!' }), { status: 200 });

  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'An unexpected error occurred.' }), { status: 500 });
  }
};