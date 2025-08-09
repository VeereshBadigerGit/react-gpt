import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// Debug: Check if dist directory exists
const distPath = path.join(__dirname, 'dist');
console.log('Checking dist directory:', distPath);
console.log('Dist exists:', fs.existsSync(distPath));

if (fs.existsSync(distPath)) {
  console.log('Dist contents:', fs.readdirSync(distPath));
} else {
  console.error('ERROR: dist directory does not exist! Make sure to run "npm run build" first.');
}

// Serve static files from the dist directory
app.use(express.static(distPath));

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Handle React Router - send all requests to index.html
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Build files not found. Please run "npm run build" first.');
  }
});

// Bind to 0.0.0.0 as required by Render
app.listen(port, '0.0.0.0', () => {
  console.log(`React app server listening on port ${port} on 0.0.0.0`);
  console.log(`Health check available at: http://localhost:${port}`);
});
