import { useState } from "react";
import blogData from "../utils/blogData";


const AddBlog=()=>{
    const[dish, setDish]= useState("");
    const[description, setDescription]= useState("");
    const[author, setAuthor]= useState("");
    
    const [addedBlog, setAddedBlog]=useState([blogData])

    
    const handleDishName=(e)=>{
        setDish(e.target.value);
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value);
    }
    const handleAuthor=(e)=>{
        setAuthor(e.target.value);
    }
    const handleOnClick=(e)=>{
        e.preventDefault();
       var  obj = {};
obj.dish = dish;
obj.description = description;
obj.author=author;
blogData.push( { dish: dish, description: description, author: author })
addedBlog.push(obj);
console.log(addedBlog);
//console.log(obj); 
alert("Thankyou for sharing your memory with us🙏")
    }
    return(
        <div className="w-4/12 m-auto mt-4 max-[410px]:w-6/12">
            <form className="space-y-2">
                <div>
                    <label>Name of the dish</label>
                    <div className="border border-gray-500 border-solid">
                        <input className="w-full" type="text" name="dish" value={dish} onChange={handleDishName}/>
                    </div>
                </div>
                <div>
                    <label>Description</label>
                    <div className="border border-gray-500 border-solid">
                        <textarea  rows={4} cols={40} className="w-full" name="descrption" value={description} onChange={handleDescription}/>
                    </div>
                </div>
                <div>
                    <label>Author</label>
                    <div className="border border-gray-500 border-solid">
                        <input className="w-full" type="text" name="author" value={author} onChange={handleAuthor}/>
                    </div>
                </div>
                <div>
                    <button className="bg-blue-400 w-full rounded-sm" onClick={handleOnClick}>Add this to the blogs</button>
                </div>
            </form>
        </div>
    )
}

export default AddBlog;