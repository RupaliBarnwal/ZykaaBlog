
import { Link } from 'react-router-dom';
import logo from '../logo.jpg';


const Header=()=>{
    return(
        <div className='flex justify-between shadow-lg top-0 overflow-hidden w-full shadow-red-200'>
            <div>
                <img alt="Logo" src={logo} className='w-20 h-20 p-2 pl-3 max-[410px]:h-15'/>
            </div>
            <div className='navbar'>
                <ul className='flex pr-4'>
                    <li className='p-2 m-2 font-bold'><Link to="/">Home</Link></li>
                    <li className='p-2 m-2 font-bold'><Link to="/about">About</Link></li>
                    <li className='p-2 m-2 font-bold'><Link to="/addblog">AddBlog</Link></li>
                    <li className='p-2 m-2 font-bold'><Link to="/signin">SignIn</Link></li>
                </ul>
            </div>
        </div>
    )
}


export default Header;