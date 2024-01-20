import { useState } from "react";
import blogData from "../utils/blogData";
import BlogCard from "./BlogCard";

const Blogs=()=>{
    const[searchText, setSearchText]=useState("");
    const handleSearchText=(e)=>{
        setSearchText(e.target.value);
    }
return (
    <div>
        <div > <h1 className="font-bold text-3xl text-center p-2 max-[350px]:text-lg">Welcome to the Blog !</h1></div>
        <div className="flex m-2 p-2" ><input className="border border-solid border-blue-400 rounded-l-md" type="text" value={searchText} name="searchText" onChange={handleSearchText}/>
        <button className="bg-blue-400 text-white p-1 rounded-r-md">Search</button></div>
        <div className="flex p-2 m-2 max-[350px]:block">
           {blogData.map((item, index)=>(
           <BlogCard key={index} dish={item.dish} img={item.image} description={item.description} author={item.author}/>
           ))} 
        </div>
    </div>
)
}


export default Blogs;
