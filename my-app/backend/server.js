const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.post('/save-email', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Your absolute path to emails.txt
  const emailfilePath = 'C:\\Users\\itayg\\Downloads\\Fit.Rank\\Fit.Rank\\my-app\\src\\data\\emails.txt';

  // Get the directory path (everything before the file name)
  const dirPath = path.dirname(emailfilePath);

  // Make sure the directory exists — create it if it doesn't
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Now append the email to the file (creates file if not exists)
  fs.appendFile(emailfilePath, email + '\n', (err) => {
    if (err) {
      console.error('Error saving email:', err.message);
      return res.status(500).json({ message: 'Failed to save email' });
    }
    res.json({ message: 'Email saved successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
