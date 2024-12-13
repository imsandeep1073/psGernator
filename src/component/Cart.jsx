import React, { useState, useEffect } from 'react'

function Cart() {
    const [cardData, setCardData] = useState([])

    const fatchApi = async () => {
        let a = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await a.json();
        setCardData(data);
        console.log(data)
    }

    useEffect(() => {
        fatchApi()
    }, [])

  

    return (
        <div className='flex flex-wrap justify-center gap-4 p-3'>
            {cardData.map((item) => {
                return (
                    <div key={item.id} className="max-w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {item.title.length > 25 ? item.title.slice(0, 25) + '...' : item.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {item.body.length > 50 ? item.body.slice(0, 50) + '...' : item.body}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">User id : {item.userId}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default Cart
























// import React, { useState, useEffect } from 'react'




// const Cart = () => {
//     const [cardes, setCardes] = useState([]);


//     const fatchData = async () => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const result = await response.json();
//         setCardes(result);
//         console.log(result)

//     }

//     useEffect(() => {
//         fatchData();
//     }, [])




//     return (




//         <div>
//             {cardes.map((e) => {
//                 <div key={e.id}>
//                     <h1>{e.title}</h1>
//                 </div>
//             })}
//         </div>





//     );
// }


// export default Cart