// src/pages/api/send-contact-email.ts (最终 Cloudflare 兼容版)
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import dotenv from 'dotenv';

export const prerender = false;

// 在本地开发时加载 .env, 在生产环境无害地跳过
dotenv.config();

// 优先从平台注入的环境变量获取，再从 process.env 回退
const resendApiKey = (import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY) as string;
const toEmail = (import.meta.env.CONTACT_FORM_RECEIVER_EMAIL || process.env.CONTACT_FORM_RECEIVER_EMAIL) as string;
const fromEmail = (import.meta.env.CONTACT_FORM_SENDER_EMAIL || process.env.CONTACT_FORM_SENDER_EMAIL) as string;

// 如果关键配置不存在，则在初始化时就抛出错误
if (!resendApiKey || !toEmail || !fromEmail) {
  throw new Error("Missing Resend environment variables. Check your platform's environment variable settings.");
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
      return new Response(JSON.stringify({ error: 'Failed to send message.' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: 'Message sent successfully!' }), { status: 200 });

  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'An unexpected error occurred.' }), { status: 500 });
  }
};