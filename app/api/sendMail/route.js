import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { fromMail, name, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      // host: 'smtpro.zoho.in',
      // port: 465,
      // secure: true,
      auth: {
        user: 'amdadul1807107@gmail.com',
        // user: 'hello@grandson.media',
        pass: 'wzhujflleuttdcyp',
        // user: process.env.NODEMAILER_EMAIL,
        // pass: process.env.NODEMAILER_PW,
        // NODEMAILER_EMAIL = 'amdadul1807107@gmail.com'
        // NODEMAILER_PW = "wzhujflleuttdcyp"
      }
    })

    const mailOption = {
      from: fromMail,
      to: "support@hyphylabs.com",
      // to: "haque1807107@stud.kuet.ac.bd",
      subject: `${name ? name : fromMail} is looking for you.`,
      html: `
        <h3>New message from ${fromMail}</h3>
        <p>${message}</p>
        `
    }

    await transporter.sendMail(mailOption)
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}