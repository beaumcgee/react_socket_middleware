
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCustomValue } from './customSlice'
import { sendData, connect, disconnect } from './CustomActions'

function App() {

    const dispatch = useDispatch()
    const storeValue = useSelector((state) => state.custom.value)

    const [formValue, setFormValue] = useState('');
    const [sendValue, setSendValue] = useState('');

    return (
        <div>
            <h2>Store Value: {storeValue}</h2>
            <div>
                <button onClick={() => dispatch(connect())}>Connect</button>
                <button onClick={() => dispatch(disconnect())}>Disconnect</button>
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
