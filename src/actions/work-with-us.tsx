"use server";

import { workWithUsFormSchema } from "@/components/forms/work-with-us";
import { z } from "zod";

import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME_WORK;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD_WORK;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER_WORK;
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

export async function sendContact(
  values: z.infer<typeof workWithUsFormSchema>
) {
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

  let file_content = Buffer.from([]);
  const reader = values.curriculum.stream().getReader();
  while (true) {
    const { done, value } = await reader.read();

    if (done || !value) {
      break;
    }

    file_content = Buffer.concat([file_content, value]);
  }

  const mailOptions = {
    from: SITE_MAIL_RECEIVER,
    to: SITE_MAIL_RECEIVER,
    subject: `CV LP - ${values.name}`,
    html: `
      <p><strong>Nome:</strong> ${values.name}</p>
      <p><strong>Área de interesse:</strong> ${values.interestArea}</p>
      <p><strong>Email:</strong> ${values.email}</p>
      <p><strong>Telefone:</strong> ${values.phone}</p>
      <p><strong>Cidade:</strong> ${values.city}</p>
      <p><strong>Estado:</strong> ${values.state}</p>
      <p><strong>Endereço:</strong> ${values.address}</p>
      <p><strong>Bairro:</strong> ${values.neighborhood}</p>
      <p><strong>CEP:</strong> ${values.postalCode}</p>
      <p><strong>Experiências anterior:</strong> ${values.message}</p>
      
    `,
    attachments: [
      {
        content: file_content,
        contentType: values.curriculum.type,
        filename: `CV - ${values.name}.${values.curriculum.name
          .split(".")
          .at(-1)}`,
      },
    ] as Attachment[],
  };

  const result = await transporter.sendMail(mailOptions);

  console.log("Message Sent", result.messageId);
  console.log("Mail sent to", SITE_MAIL_RECEIVER);
  return result;
}
