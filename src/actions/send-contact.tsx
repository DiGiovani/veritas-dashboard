"use server";

import { contactFormSchema } from "@/components/contact-form";
import { z } from "zod";

import nodemailer from "nodemailer";
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;
const MAIL_PORT = parseInt(process.env.MAIL_PORT || "587");
const transporter = nodemailer.createTransport({
  service: "zoho",
  host: SMTP_SERVER_HOST,
  port: MAIL_PORT,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendContact(values: z.infer<typeof contactFormSchema>) {
  try {
    const isVerified = await transporter.verify();

    if (!isVerified) {
      throw new Error("SMTP Server is not verified");
    }
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }

  const mailOptions = {
    from: SITE_MAIL_RECEIVER,
    to: values.email,
    subject: `Confirmação de contato ${values.name}`,
    html: `
      <p><strong>Nome:</strong> ${values.name}</p>
      <p><strong>Empresa:</strong> ${values.company}</p>
      <p><strong>Email:</strong> ${values.email}</p>
      <p><strong>Telefone:</strong> ${values.phone}</p>
      <p><strong>Cidade:</strong> ${values.city}</p>
      <p><strong>Estado:</strong> ${values.state}</p>
      <p><strong>Ramo de atividade:</strong> ${values.activity}</p>
      <p><strong>Mensagem:</strong> ${values.message}</p>
    `,
  };

  const result = await transporter.sendMail(mailOptions);

  console.log("Message Sent", result.messageId);
  console.log("Mail sent to", SITE_MAIL_RECEIVER);
  return result;
}
