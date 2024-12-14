import React, { useState, useEffect } from 'react'



const Git = () => {
    const { data, setDataval } = useState([])

    // useEffect(() => {
    //      fetch('https://api.github.com/users/imsandeep1073')
    //     .then((response)=> response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    const fatchApi = async () => {
        let a = await fetch("https://api.github.com/users/imsandeep1073")
        let data = await a.json();
        console.log(data)
        setDataval(data);
    }

    useEffect(() => {
        fatchApi()
    }, [])

    // console.log(userData)

    return (
        <div>Github id : {data?.followers}</div>
    )
}

export default Git