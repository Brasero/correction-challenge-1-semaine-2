import './App.css'
import {useState} from "react";
import Input from './component/Input/index.jsx'

function App() {
    const [number, setNumber] = useState({
        number: "",
        conversion: "",
        base: 10
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        const base = name
        const parsed = parseInt(value, name)

        if (parsed && base == 10) {
            setNumber({
                ...number,
                number: value,
                conversion: parseInt(value, base).toString(2)
            })
            return
        }

        if (parsed && base == 2) {
            setNumber({
                ...number,
                number: parseInt(value, base).toString(10),
                conversion: value
            })
            return
        }

        setNumber({
            ...number,
            number: "",
            conversion: ""
        })
    }

  return (
    <>
        <Input base={'10'} number={number.number} onChangeValue={handleChange} />
        <Input base={'2'} number={number.conversion} onChangeValue={handleChange} />
    </>
  )
}

export default App
