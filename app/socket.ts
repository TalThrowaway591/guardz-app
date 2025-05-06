import { io } from 'socket.io-client';
import { apiConfig } from '../api-config'
// "undefined" means the URL will be computed from the `window.location` object

export const socket = io(apiConfig.uri, {
    // withCredentials: true
});

