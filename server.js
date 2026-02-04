import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Cloud Run provides the port via the PORT environment variable
const port = process.env.PORT || 8080;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Also serve the 'assets' directory if it's not handled by the build process
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Handle SPA routing: send all requests to dist/index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Portfolio server listening on port ${port}`);
});
