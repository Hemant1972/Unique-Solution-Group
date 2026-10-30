const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Submit Contact Inquiry
const submitContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, entity, message } = req.body;

    // Save to Database
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      entity,
      message
    });
    await newContact.save();

    // Setup Nodemailer (Optional email sending if SMTP configured)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS
      }
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL, // Company email
      subject: `New Inquiry from ${firstName} ${lastName} (${entity})`,
      text: `You received a new message:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nEntity: ${entity}\nMessage: ${message}`
    };

    // Try sending email (won't crash if SMTP credentials aren't set yet)
    try {
      await transporter.sendMail(mailOptions);
    } catch (mailError) {
      console.log('Email sending skipped/failed:', mailError.message);
    }

    res.status(201).json({ message: 'Inquiry submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get All Inquiries (For Admin Dashboard)
const getInquiries = async (req, res) => {
  try {
    const inquiries = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { submitContact, getInquiries };