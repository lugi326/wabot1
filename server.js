const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { getQRCode } = require('./index');

app.get('/', (req, res) => {
  res.send('WhatsApp Bot is running!');
});

app.get('/qr', (req, res) => {
  const qr = getQRCode();
  if (qr) {
    res.send(`<pre>${qr}</pre>`);
  } else {
    res.send('QR Code belum tersedia atau sudah terhubung ke WhatsApp');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Import dan jalankan bot WhatsApp Anda
require('./index');