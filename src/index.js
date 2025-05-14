const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Ruta para verificar si está vivo
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Ruta que devuelve la hora y un mensaje
app.get('/time', (req, res) => {
  const now = new Date();
  res.json({
    message: 'Hola desde mi MVP',
    hora: now.toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
