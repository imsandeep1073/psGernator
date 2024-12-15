import React, { useState, useEffect } from 'react'



const Git = () => {
    const [data, setDataval] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/imsandeep1073')
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                setDataval(data)
            })
    }, [])

    console.log(data)


    return (
        <div className='justify-around grid grid-flow-col gap-4'>
            <div className=''>
                <img src={data?.avatar_url} alt="" />
            </div>
            <div>
                <h1>{data.name}</h1>
                <p>{data.login}</p>
            </div>
        </div>
    )
}

export default Git