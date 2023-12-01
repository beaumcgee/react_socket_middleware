
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
            switch (action.type) {
                case 'SOCKET/SENDDATA':                    
                    ws.send(JSON.stringify(action.payload))
            }

            return next(action);
        }
    }
}

export default SocketMiddleware;
