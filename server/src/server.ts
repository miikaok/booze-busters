import env from './env';
import api from './api';

const restPort = env.REST_API_PORT;
const socketPort = env.SOCKET_API_PORT;

api.io.on('connection', socket => {
  console.log('a user connected ' + socket);
});

api.express.listen(restPort, () => {
  console.log(`Listening port ${5000}...`);
});

api.server.listen(socketPort);
