/* eslint-env node */
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// =======================
// Middleware
// =======================
app.use(cors());
app.use(express.json());

// =======================
// MongoDB Connection
// =======================
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/contactDB", {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err.message));

// =======================
// Schema & Model
// =======================
const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      website: { type: String, default: "" },
      message: { type: String, required: true, trim: true },
    },
    { timestamps: true }
  )
);

// =======================
// Nodemailer Setup
// =======================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((err) => {
  if (err) console.error("❌ SMTP Error:", err.message);
  else console.log("✅ SMTP Ready");
});

// =======================
// Helpers
// =======================

// simple validation
const validateContact = ({ name, email, message }) => {
  if (!name || !email || !message) return "All required fields must be filled";
  if (!email.includes("@")) return "Invalid email format";
  return null;
};

// send email helper
const sendEmail = async ({ to, subject, html }) => {
  return transporter.sendMail({
    from: `"Portfolio" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};

// =======================
// Routes
// =======================

app.get("/", (_, res) => {
  res.send("🚀 API is running...");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, website, message } = req.body;

  try {
    // ✅ validation
    const errorMsg = validateContact({ name, email, message });
    if (errorMsg) {
      return res.status(400).json({ success: false, message: errorMsg });
    }

    // ✅ save to DB (non-blocking safe)
    Contact.create({ name, email, website, message })
      .then(() => console.log("📦 Saved to DB"))
      .catch((err) => console.log("⚠️ DB skipped:", err.message));

    // ✅ send email to YOU
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `🚀 New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;padding:20px">
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Website:</b> ${website || "N/A"}</p>
          <p><b>Message:</b><br/>${message}</p>
        </div>
      `,
    });

    // ✅ auto reply
    await sendEmail({
      to: email,
      subject: "Thanks for reaching out 🚀",
      html: `
        <p>Hey ${name},</p>
        <p>I’ve received your message and will get back to you soon.</p>
        <br/>
        <p>– Parth</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully 🚀",
    });
  } catch (error) {
    console.error("❌ ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

// =======================
// Start Server
// =======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});