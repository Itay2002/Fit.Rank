const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Add this for root GET test
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.post('/save-email', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const filePath = path.join(__dirname, 'src', 'data', 'emails.txt');

  fs.appendFile(filePath, email + '\n', (err) => {
    if (err) {
      console.error('Error saving email:', err);
      return res.status(500).json({ message: 'Failed to save email' });
    }

    res.json({ message: 'Email saved successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
