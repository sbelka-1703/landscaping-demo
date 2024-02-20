import nodemailer from "nodemailer";

type SendMailParams = {
  name: string;
  subject: string;
  body: string;
};

export async function sendMail({ name, subject, body }: SendMailParams) {
  const { APP_PASSWORD, APP_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    host: "smtp.porkbun.com",
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: APP_EMAIL,
      pass: APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: true, // for production, make sure the server certificate is valid
    },
  });

  await new Promise<void>((resolve, reject) => {
    transport.verify(function (error) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Connected");
        resolve();
      }
    });
  });

  const mailData = {
    from: APP_EMAIL,
    to: "sbelka93@gmail.com, sbelka1703@protonmail.com",
    subject,
    html: body,
  };

  await new Promise<void>((resolve, reject) => {
    transport.sendMail(mailData, (err, info) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("info", info);
        console.log("Email sent");
        resolve();
      }
    });
  });
}
