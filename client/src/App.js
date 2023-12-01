
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCustomValue } from './customSlice'
import { sendData } from './CustomActions'

function App() {

    const dispatch = useDispatch()
    const storeValue = useSelector((state) => state.custom.value)

    const [formValue, setFormValue] = useState('');
    const [sendValue, setSendValue] = useState('');

    return (
        <div>
            <h2>Store Value: {storeValue}</h2>
            <div>
                {/* <button onClick={() => dispatch(sendData('SOCKET/CONNECT'))}>Connect</button> */}
                {/* <button onClick={() => dispatch(sendData('SOCKET/DISCONNECT'))}>Disconnect</button> */}
            </div>
            <div>
                <input type="text" value={formValue} onChange={(event) => setFormValue(event.target.value)} />
                <button onClick={() => dispatch(setCustomValue('Page ' + formValue))}>Update Store Value</button>
            </div>
            <div>
                <input type="text" value={sendValue} onChange={(event) => setSendValue(event.target.value)} />
                <button onClick={() => dispatch(sendData(sendValue))}>Send Data</button>
            </div>
        </div>
    );
}

export default App;
