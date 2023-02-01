import env from './env';
import api from './api';

const restPort = env.API_PORT || 5000;

api.io.on('connection', socket => {
  console.log('a user connected ' + socket);
});

api.express.listen(restPort, () => {
  console.log(`Listening port ${5000}...`);
});

api.server.listen(3000);
