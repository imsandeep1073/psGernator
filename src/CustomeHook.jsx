import React from 'react'

function CustomeHook(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectedCurrency = "usd",
        amountDisable = false,
        currencyDisable = false,
        className = "",

    }
) {

    return (
        <div className='bg-gray-700 w-full h-screen mx-auto py-12'>
            <div className='w-full max-w-md bg-gray-600 mx-auto p-4 rounded-xl'>
                <div className='bg-white rounded-lg '>
                    <div className='flex gap-2 justify-between p-4'>
                        <div className=''>
                            <label htmlFor="" className='inline-block mb-2'>From</label>
                            <input
                                type="number"
                                className='w-full bg-gray-200 outline-none p-1'
                                name=""
                                id=""
                                placeholder='Amount'
                                value={amount}
                                disabled={amountDisable}
                                onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}   // safty check value gets string so we use NUmber
                            />
                        </div>
                        <div className='text-end'>
                            <label htmlFor="" className='inline-block mb-2'>Currency Type</label>
                            <select
                             name=""
                              id="" 
                              className='bg-gray-200 rounded-md text-gray-500 text-sm p-2'
                              value={selectedCurrency}
                              onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                              disabled={currencyDisable}
                              >

                                {currencyOptions.map((currency)=>{
                                    <option key={currency} value={currency}>{currency}</option>
                                })}                               
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center relative h-4'>
                    <button className='bg-sky-500 text-white rounded-2xl pl-3 pr-3 pt-2 pb-2 absolute top-[-10px] drop-shadow-md'>swap</button>
                </div>
                <div className='bg-white rounded-lg '>
                    <div className='flex gap-2 justify-between p-4'>
                        <div className=''>
                            <label htmlFor="" className='block mb-2'>TO</label>
                            <input type="number" className='w-full bg-gray-200 outline-none p-1' name="" id="" />
                        </div>
                        <div className='text-end'>
                            <label htmlFor="" className='block mb-2'>Currency Type</label>
                            <select name="" id="" className='bg-gray-200 rounded-md text-gray-500 text-sm p-2'>
                                <option value="1">USD</option>
                                <option value="2">INR</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <button className='bg-sky-500 text-white rounded-lg pl-3 pr-3 pt-2 pb-2 w-full drop-shadow-md hover:translate-y-1'>Convert Currency</button>
                </div>
            </div>
        </div>
    )
}

export default CustomeHook