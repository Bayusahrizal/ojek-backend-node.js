// Import module Express
const express = require('express');
const app = express();
const port = 3000; // Tentukan port server

// Middleware untuk parsing JSON (penting untuk API)
app.use(express.json());

// Definisikan rute (endpoint API) pertama
app.get('/', (req, res) => {
  res.send('Server Node.js berjalan! Ini adalah API utama.');
});

// Rute sederhana untuk API data driver
app.get('/api/drivers', (req, res) => {
  const drivers = [
    { id: 1, nama: 'Budi', status: 'Online' },
    { id: 2, nama: 'Santi', status: 'Offline' }
  ];
  res.json(drivers); // Mengirim data dalam format JSON
});

// Server mendengarkan di port yang ditentukan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});