const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middlewares for handling form submissions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Healthcheck endpoint for Railway / monitoring
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Form submission handler (emulating contact-form.php)
app.all(['/contact-form.php', '/contact-form'], (req, res) => {
  const data = req.method === 'POST' ? req.body : req.query;
  console.log('[LEAD RECEIVED]', new Date().toISOString(), data);

  // If request expects JSON or is AJAX
  if (req.xhr || (req.headers.accept && req.headers.accept.includes('application/json'))) {
    return res.json({
      success: true,
      message: 'Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.'
    });
  }

  // If standard browser form POST, return an informative confirmation
  res.send(`
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Заявка принята</title>
      <link rel="stylesheet" href="/css/bootstrap.css">
      <link rel="stylesheet" href="/css/main.css">
      <style>
        body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #f8f9fa; font-family: sans-serif; }
        .card { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center; max-width: 500px; }
        .btn-custom { background: #e65100; color: white; padding: 10px 25px; border-radius: 4px; text-decoration: none; display: inline-block; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h2 style="color: #2e7d32;">Спасибо!</h2>
        <p style="font-size: 18px; margin: 15px 0;">Ваша заявка успешно отправлена.<br>Наш менеджер свяжется с вами в ближайшее время.</p>
        <a href="/" class="btn-custom">Вернуться на главную</a>
      </div>
    </body>
    </html>
  `);
});

// AJAX handler (emulating ajax.php)
app.all(['/ajax.php', '/ajax'], (req, res) => {
  console.log('[AJAX REQUEST]', req.method, req.body || req.query);
  res.send('1');
});

// Static files serving with support for .htm and .html extensions
app.use(express.static(path.join(__dirname), {
  extensions: ['html', 'htm'],
  index: ['index.html', 'index.htm']
}));

// Fallback to index.html for undefined routes or 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
