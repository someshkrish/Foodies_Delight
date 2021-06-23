const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM RECIEVED. Shutting down gracefully!!!');
  server.close(() => {
    console.log('Process terminated...');
  });
});
