const Contact = require("../models/contactModel");

exports.createMessage = async (req, res) => {
  try {
    const { username, phoneNumber, email, subject, message } = req.body;

    if (!username || !phoneNumber || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMessage = new Contact({ username, phoneNumber, email, subject, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong. Try again later." });
  }
};
