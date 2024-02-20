"use server";
import { sendMail } from "./mail";

const send = async (data: any) => {
  console.log("data ++++", data);
  await sendMail({
    name: data.name,
    subject: "Customer Email from DV Website",
    body: `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; }
          .header { background: #f0f0f0; padding: 10px; text-align: center; }
          .content { margin: 20px; }
          .footer { background: #f0f0f0; padding: 10px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>Customer Inquiry from DV Website</h2>
        </div>
        <div class="content">
           <p><strong>Name of the Customer:</strong> ${data.name}</p> 
           <p><strong>Email of Customer:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.body}</p>
        </div>
        <div class="footer">
          <p>Thank you for contacting us.</p>
        </div>
      </body>
    </html>
  `,
  });
};

export default send;
