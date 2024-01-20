import { useState } from 'react';
import logo from '../logo.jpg'

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = () => {
        alert("your email is "  + email + " "+"and your password is" + password)
    }
    return (
        <div className=" w-3/12 h-4/6 m-auto mt-4 max-[350px]:w-6/12">
            <div>
                <img src={logo} className="w-20 h-20 mx-auto" alt="logo" />
            </div>
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 text-blue-500">SignIn</h2>
            <div className='mx-auto'>
                <form className='space-y-6' action='#' method='POST'>
                    <div>
                        <label>Email</label>
                        <div className="border border-gray-400">
                            <input type='email' required autoComplete='email' name='username' onChange={handleEmail} value={email}
                            className="block w-full"></input>
                        </div>
                    </div>
                    <div>
                        <label>Password</label>
                        <div className="border border-gray-400">
                            <input id="password" type="password" required name="password" value={password} onChange={handlePassword}
                            className="block w-full"></input>
                            
                        </div>
                    </div>
                        
                </form>
            </div>
            <div >
             <button className='bg-blue-500 text-white p-2 rounded-md mt-6 block w-full' onClick={handleSubmit} >Submit</button>
                           
                    </div>
        </div>
    )
}

export default SignIn;