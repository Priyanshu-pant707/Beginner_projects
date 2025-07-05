import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault()             //two way binding 
       handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className=' flex h-screen w-screen items-center justify-center'>

            <div className='border-2  rounded-3xl border-emerald-600 p-30'>

                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'>

                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='outline-none  text-xl border-2 border-emerald-600 rounded-full py-4 px-5' type="email" placeholder='Enter your email' />



                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='outline-none  text-xl border-2 border-emerald-600 rounded-full py-4 px-5 mt-3' type="password" placeholder='Enter your password' />
                    <button className='outline-none  text-xl border-none bg-emerald-600 rounded-full py-4 px-5 mt-6' >Login</button>


                </form>
            </div>
        </div>
    )
}

export default Login
