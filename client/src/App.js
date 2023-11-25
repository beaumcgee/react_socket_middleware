
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from './CustomSlice'

function App() {

    const dispatch = useDispatch()
    const storeValue = useSelector((state) => state.custom.value)

    const [formValue, setFormValue] = useState('')

    return (
        <div>
            <h2>Store Value: {storeValue}</h2>
            <input type="text" value={formValue} onChange={(event) => setFormValue(event.target.value)} />
            <button onClick={() => dispatch(setValue('Page ' + formValue))}>Update Store Value</button>
        </div>
    );
}

export default App;
