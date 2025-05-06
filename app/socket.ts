import { io } from 'socket.io-client';
import { apiConfig } from '../api-config'

export const socket = io(apiConfig.uri);

