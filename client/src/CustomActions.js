
import { createAction } from '@reduxjs/toolkit'

export const sendData = createAction('socket/sendData', () => {
    return { 'msg': 'testData'};
});
