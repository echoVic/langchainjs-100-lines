#!/usr/bin/env node

import { readFile } from 'fs/promises';
import { createServer } from 'http';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

async function findAvailablePort(startPort = 3000) {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.listen(startPort, () => {
      const port = server.address().port;
      server.close(() => resolve(port));
    });
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(startPort + 1).then(resolve).catch(reject);
      } else {
        reject(err);
      }
    });
  });
}

async function startServer() {
  try {
    const port = await findAvailablePort(3000);
    
    const server = createServer(async (req, res) => {
      try {
        let filePath = join(__dirname, '..', req.url === '/' ? 'index.html' : req.url);
        
        // 防止路径遍历
        if (!filePath.startsWith(join(__dirname, '..'))) {
          res.writeHead(403);
          res.end('403 Forbidden');
          return;
        }

        let content;
        try {
          content = await readFile(filePath);
        } catch (err) {
          if (err.code === 'ENOENT') {
            res.writeHead(404);
            res.end('404 Not Found');
            return;
          }
          throw err;
        }

        const ext = extname(filePath);
        const contentType = mimeTypes[ext] || 'text/plain';
        
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch (err) {
        console.error('Error serving file:', err);
        res.writeHead(500);
        res.end('500 Internal Server Error');
      }
    });

    server.listen(port, async () => {
      console.log(`🚀 LangChain.js Demo Server running at:`);
      console.log(`   Local:   http://localhost:${port}`);
      console.log(`   Network: http://${await getNetworkAddress()}:${port}`);
      console.log(`\n📁 Serving files from: ${join(__dirname, '..')}`);
      console.log(`\n🎯 Quick access:`);
      console.log(`   Homepage: http://localhost:${port}`);
      console.log(`   Demo 01 (Hello): http://localhost:${port}/examples/01-hello/browser-demo.html`);
      console.log(`   Demo 02 (LCEL): http://localhost:${port}/examples/02-lcel/browser-demo.html`);
      console.log(`\n📚 Available demos:`);
      console.log(`   • 01-hello: 基础 LLM 调用演示`);
      console.log(`   • 02-lcel: LCEL 管道式编程演示`);
    });

    // 优雅关闭
    process.on('SIGTERM', () => {
      console.log('\n👋 Shutting down server...');
      server.close();
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

async function getNetworkAddress() {
  const { networkInterfaces } = await import('os');
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

startServer();