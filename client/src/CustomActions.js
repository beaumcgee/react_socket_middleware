
import { createAction } from '@reduxjs/toolkit'

export const sendData = createAction('SOCKET/SENDDATA', (msg) => {
    return { 'payload': msg };
});

export const connect = createAction('SOCKET/CONNECT', () => {
    return {};
});

export const disconnect = createAction('SOCKET/DISCONNECT', () => {
    return {};
});
