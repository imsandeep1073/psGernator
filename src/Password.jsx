import { useState, useCallback, useEffect, useRef } from 'react'


function Password() {

  // useState
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [pasteValu, setPasteValu] = useState('')

  let copyData = false;
  // useCallback 
  const gernatePass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed == true) str += "0123456789";
    if (charAllowed == true) str += "~!@#$%^&*()_+{}|\/<>";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // useEffect
  useEffect(() => {
    gernatePass();
  }, [length, numberAllowed, charAllowed]);

  let copyPass = () => {
    window.navigator.clipboard.writeText(password);
    passworRef.current.select();
    copyData = true;
  }

  let passworRef = useRef(null);
 
  let pasteCopy = () => {
    if (copyData == true) {
      setPasteValu(password);
      window.navigator.clipboard.writeText("");
    }else{
      setPasteValu("Copy Password First");
    }
  }

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
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPass}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 text-orange-400'>
          <div
            className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
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
                setNumberAllowed((prev) => !prev)
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
        <input className='p-2' type="text" placeholder='Paste What You Select' defaultValue={pasteValu} />
        <button className='bg-blue-700 text-white p-2 hover:bg-blue-500' onClick={pasteCopy}>Paste it</button>
      </div>
    </div>
  )
}

export default Password
