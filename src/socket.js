import { io } from 'socket.io-client';

export const initSocket = async () => {
  const options = {
    'force new connection': true,
    reconnectionAttempts: 10,
    timeout: 10000,
    transports: ['websocket'],
  };

  const socket = io(process.env.REACT_APP_BACKEND_URL, options);

  return socket;
};
