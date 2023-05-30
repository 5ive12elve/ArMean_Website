const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Perform validation if needed
  if (!username || !email || !password) {
    res.status(400).send('Please fill in all fields.');
    return;
  }

  // Create a data object with the user information
  const data = {
    username: username,
    email: email,
    password: password
  };

  // Convert data to JSON string
  const jsonData = JSON.stringify(data);

  // Generate a filename based on the email
  const filename = `${email}.json`;

  // Define the file path within the "public/users_data" directory
  const filePath = path.join(__dirname, 'public', 'users_data', filename);

  // Save the user data to a file in the "public/users_data" directory
  fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
      console.error('Error saving user data:', err);
      res.status(500).send('An error occurred during registration.');
    } else {
      console.log('User data saved successfully:', filename);
      res.send('Registration successful!');
    }
  });
});

// Start the server
const port = 80;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
