// api.js

const express = require('express');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://book-marketplace-website-default-rtdb.firebaseio.com/'
});

const db = admin.database();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to handle form submission
app.post('/api/books', (req, res) => {
  const formData = req.body;

  // Save form data to Firebase Realtime Database
  const newBookRef = db.ref('books').push();
  newBookRef.set(formData)
    .then(() => {
      res.status(200).json({ message: 'Book listed successfully' });
    })
    .catch(error => {
      console.error('Error listing book:', error);
      res.status(500).json({ error: 'Failed to list the book. Please try again.' });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
