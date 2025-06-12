// src/pages/api/send-contact-email.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// 告诉 Astro，这个端点是服务器端渲染的
export const prerender = false;

// 加载环境变量
dotenv.config();

// 从环境变量安全地获取配置
const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_FORM_RECEIVER_EMAIL;
const fromEmail = process.env.CONTACT_FORM_SENDER_EMAIL;

// 启动时检查关键配置是否存在
if (!resendApiKey || !toEmail || !fromEmail) {
  throw new Error("Missing required Resend environment variables. Please check your .env file.");
}

const resend = new Resend(resendApiKey);

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), { status: 405 });
  }

  try {
    // 使用 FormData 来处理表单提交，更标准
    const data = await request.formData();
    const name = data.get('name') as string || 'Anonymous';
    const email = data.get('email') as string;
    const subject = data.get('subject') as string || 'No Subject';
    const message = data.get('message') as string;

    // 服务器端数据校验
    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Email and message are required fields." }), { status: 400 });
    }

    // 调用 Resend API 发送邮件
    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `[Jaideepas Contact Form] ${subject}`,
      reply_to: email, // 将回复地址设为用户的邮箱，方便你直接回复
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