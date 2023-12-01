
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCustomValue } from './customSlice'

function App() {

    const dispatch = useDispatch()
    const storeValue = useSelector((state) => state.custom.value)

    const [formValue, setFormValue] = useState('');

    return (
        <div>
            <h2>Store Value: {storeValue}</h2>
            <div>
                <button onClick={() => dispatch({ 'socket/connect': 'connect' })}>Connect</button>
                <button onClick={() => dispatch({ 'socket/disconnect': 'disconnect' })}>Disconnect</button>
            </div>
            <input type="text" value={formValue} onChange={(event) => setFormValue(event.target.value)} />
            <button onClick={() => dispatch(setCustomValue('Page ' + formValue))}>Update Store Value</button>
        </div>
    );
}

export default App;
