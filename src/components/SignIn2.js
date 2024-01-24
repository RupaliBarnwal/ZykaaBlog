import { useState } from 'react';
import logo from '../logo.jpg';
import { useForm} from 'react-hook-form';

const SignIn = () => {
    const [userData, setUserData]= useState();
    const {register, handleSubmit,reset, formState:{errors}, trigger}= useForm();
    
   const onSubmit=(data)=>{
        setUserData(data);
        // console.log(data);
        reset();
        alert("Signed in Successfully")
    }
        
    return (
        <div className=" w-3/12 h-4/6 m-auto mt-4 max-[410px]:w-6/12">
            <pre>{JSON.stringify(userData,undefined,2)}</pre>
            <div>
                <img src={logo} className="w-20 h-20 mx-auto" alt="logo" />
            </div>
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 text-blue-500">SignIn</h2>
            <div className='mx-auto'>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)} method='POST'>
                    <div>
                        <label>Email</label>
                        <div className="border border-gray-400">
                            <input type='email' autoComplete='email' name='email' placeholder='Email'
                            {...register("email",{
                            required:"Email is required",
                            pattern:{
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:"Invalid email"
                            }})}
                            onKeyUp={() => {
                              trigger("email");
                            }}
                            className="block w-full"/>
                            
                        </div>
                        {errors.email && (
                <small className="text-red-400">{errors.email.message}</small>
              )}
                    </div>
                    <div>
                        <label>Password</label>
                        <div className="border border-gray-400">
                            <input  type="password" name="password" placeholder='Password'
                            {
                                ...register("password",{
                                    required:"Password is required",
                                    minLength:{
                                        value:6, message:"Password must be greater than 6"
                                    }
                                })
                            }
                            className="block w-full"></input>
                            
                        </div>
                        {errors.password && (
                <small className="text-red-400">{errors.password.message}</small>
              )}
                    </div>
                    <button className='bg-blue-500 text-white p-2 rounded-md mt-6 block w-full'>Submit</button>    
                </form>
            </div>
            <div >
             
                           
                    </div>
        </div>
    )
}

export default SignIn;