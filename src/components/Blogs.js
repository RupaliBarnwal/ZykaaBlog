import { useState } from "react";
import blogData from "../utils/blogData";
import BlogCard from "./BlogCard";

const Blogs=()=>{
    const[searchText, setSearchText]=useState("");
    const[filteredBlogData, setfilteredBlogData]=useState(blogData);
    const handleSearchText=(e)=>{
        setSearchText(e.target.value);
    }
    const handleSubmit=()=>{
        const filteredBlogData= blogData.filter((blogItem)=>blogItem.dish.toLowerCase().includes(searchText.toLowerCase()));
        setfilteredBlogData(filteredBlogData);
     }
return (
    <div>
        <div > <h1 className="font-bold text-3xl text-center p-2 max-[410px]:text-lg">Welcome to the Blog👨‍🍳!</h1></div>
        <div className="flex m-2 p-2" ><input className="border border-solid border-blue-400 rounded-l-md" type="text" value={searchText} onChange={handleSearchText} name="searchText"/>
        <button className="bg-blue-400 text-white p-1 rounded-r-md"onClick={handleSubmit}>Search</button></div>
        <div className="flex p-2 m-2 max-[410px]:block">
           {filteredBlogData.map((item, index)=>(
           <BlogCard key={index} dish={item.dish} img={item.image} description={item.description} author={item.author}/>
           ))} 
        </div>
    </div>
)
}


export default Blogs;
