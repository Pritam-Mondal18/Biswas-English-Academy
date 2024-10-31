const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/submit_contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  // You can now use this data, e.g., send an email
  console.log("Contact form data received:", { name, email, subject, message });

  // Respond to the client
  res.status(200).json({ message: "Message received" });
});

app.listen(5091, () => {
  console.log("Server is running on port 5091");
});
