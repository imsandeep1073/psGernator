import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { userid } = useParams()

    return (
        <div className='pt-5 pb-5 bg-sky-700 text-3xl font-bold text-white'>User: {userid}</div>
    )
}

export default User