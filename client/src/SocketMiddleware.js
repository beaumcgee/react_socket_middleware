
import { setCustomValue } from './customSlice'

const SocketMiddleware = () => {
    return store => {
        const ws = new WebSocket('ws://127.0.0.1:8000')

        ws.onopen = () => {
            console.log('Connected to server')
        }

        ws.onmessage = (event) => {
            store.dispatch(setCustomValue('Server ' + event.data));
        }

        ws.onclose = () => {
            console.log('Disconnected from server')
        }        

        return next => action => {
            // if (action.type == "SEND_WEBSOCKET_MESSAGE") {
            //     socket.send(action.payload);
            //     return;
            // }
            // switch (action.type) {
            //     case 'socket/disconnect':
            //         console.log('Disconnecting')
            //         ws.close()
            //         break;
            // }

            return next(action);
        }
    }
}

export default SocketMiddleware;
