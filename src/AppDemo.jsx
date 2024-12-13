import { useCallback, useState, useEffect, useRef } from 'react'

import './App.css'
import LoginForm from './LoginForm';

function App() {

    const [length, setLenght] = useState(8);
    const [numberAllowed, setNUmberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");


    const checkPass = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed == true) str += "0123456789";
        if (charAllowed == true) str += "!@#$%^&*()_+=-{}|\:'<.,>/?";

        for (let i = 0; i < length; i++) {
            const passGarnator = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(passGarnator);
        }

        setPassword(pass)

    }, [length, numberAllowed, charAllowed]);

    useEffect(() => {
        checkPass();
    }, [length, numberAllowed, charAllowed]);

    const coypPass = () => {
        window.navigator.clipboard.writeText(password);
        passworRef.current.select();
    }

    const passworRef = useRef(null)


    return (
        <div className='bg-gray-700 w-full h-screen mx-auto py-12'>
            <div className='w-full max-w-md bg-gray-600 mx-auto p-3 rounded-xl' >
                <h1 className='text-white text-center py-3'>Password Generator</h1>
                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input
                        type="text"
                        value={password}
                        className='outline-none w-full py-1 px-3'
                        placeholder='Password'
                        readOnly
                        ref={passworRef}
                    />
                    <button
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={coypPass}>Copy</button>
                </div>
                <div className='flex text-sm gap-x-2 text-orange-400'>
                    <div
                        className='flex items-center gap-x-1'>
                        <input
                            type="range"
                            min={8}
                            max={25}
                            value={length}
                            onChange={(e) => setLenght(e.target.value)}
                            className='cursor-pointer'
                            name=''
                            id=''
                        />
                        <label htmlFor="length">Length : {length}</label>
                    </div>
                    <div
                        className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            onChange={() => {
                                setNUmberAllowed((prev) => !prev)
                            }}
                            name=''
                            id='number'
                        />
                        <label htmlFor="number">Number</label>
                    </div>

                    <div
                        className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            onChange={() => {
                                setCharAllowed((prev) => !prev)
                            }}

                            name=''
                            id='character'
                        />
                        <label htmlFor="character">Character</label>
                    </div>
                </div>
            </div>
            <div className='mt-5 flex justify-center'>
                <input className='p-2' type="text" placeholder='Paste What You Select' />
                <button className='bg-blue-700 text-white p-2 hover:bg-blue-500'>Paste it</button>
            </div>
            <div className='mt-5 flex justify-center'>
                <button className='bg-blue-700 text-white p-2 hover:bg-blue-500' onClick={LoginForm}>Login</button>
            </div>
        </div>
    )
}

export default App
