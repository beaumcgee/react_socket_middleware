
import { setCustomValue } from './customSlice'

const SocketMiddleware = () => {

    return store => {
        let ws = new WebSocket('ws://127.0.0.1:8000')

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
                case 'SOCKET/CONNECT': 
                    ws = new WebSocket('ws://127.0.0.1:8000')

                    ws.onopen = () => {
                        console.log('Connected to server')
                    }
            
                    ws.onmessage = (event) => {
                        store.dispatch(setCustomValue('Server ' + event.data));
                    }
            
                    ws.onclose = () => {
                        console.log('Disconnected from server')
                    }

                    break
                case 'SOCKET/DISCONNECT':
                    ws.close()       
                    break
                case 'SOCKET/SENDDATA':          
                    if (ws.readyState !== WebSocket.CLOSED && ws.readyState !== WebSocket.CLOSED) {
                        ws.send(JSON.stringify(action.payload))
                    } else {
                        alert('Websocket is disconnected!')
                    }
                    break
            }

            return next(action);
        }
    }
}

export default SocketMiddleware;
