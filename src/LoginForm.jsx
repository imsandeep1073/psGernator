import { useState, useRef } from "react";

const LoginForm = () => {
    const [userData, setUserData] = useState("")
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")

    const resetName = useRef(null)
    const resetEmail = useRef(null)

    const handleSub = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const submittData = (e) => {
        e.preventDefault();
        console.log(userData);
        resetName.current.value = "";
        resetEmail.current.value = "";


    }

    return (
        <div className='bg-gray-700 w-full h-screen mx-auto py-12'>
            <div className='w-full max-w-md bg-gray-600 mx-auto p-3 rounded-xl'>
                <h1 className="font-bold text-3xl text-white">Login Form</h1>
                <div className="p-4">
                    <form onSubmit={submittData}>
                        <div className="gap-2 flex mt-4 align-middle">
                            <label htmlFor="Name" className=" text-white">Name</label>
                            <input
                                className="rounded-md w-full focus:outline-none pl-2 p-1"
                                placeholder="Enter Name"
                                type="text"
                                name="name"
                                onChange={handleSub}
                                ref={resetName} />
                        </div>
                        <div className="gap-2 flex mt-4 align-middle">
                            <label htmlFor="Email" className=" text-white">Email</label>
                            <input
                                className="rounded-md w-full focus:outline-none pl-2 p-1"
                                placeholder="Enter Email"
                                type="Email"
                                name="Email"
                                onChange={handleSub}
                                ref={resetEmail} />
                        </div>
                        <input type="submit" className="p-2 font-bold text-lg bg-blue-950 text-white w-full mt-3 rounded-lg" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm