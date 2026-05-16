import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.SMTP_PORT, process.env.SMTP_HOST, process.env.SMTP_USER, process.env.SMTP_PASS,)

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    debug: true,
    logger: true,
});

export default transporter;