import { useState } from "react";
import blogData from "../utils/blogData";


const AddBlog=()=>{
    //const[dish, setDish]= useState("");
    //const[description, setDescription]= useState("");
    //const[author, setAuthor]= useState("");
    
    const [addedBlog, setAddedBlog]=useState([blogData])
    const [userInfo, setUserInfo]=useState({
        dish:"",description:"",author:""
    })
    const[record, setRecord]=useState([]);
    // const handleDishName=(e)=>{
    //     setDish(e.target.value);
    // }
    // const handleDescription=(e)=>{
    //     setDescription(e.target.value);
    // }
    // const handleAuthor=(e)=>{
    //     setAuthor(e.target.value);
    // }
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserInfo({...userInfo, [name]:value});
    }
    const handleOnClick=(e)=>{
        e.preventDefault();
//        var  obj = {};
// obj.dish = dish;
// obj.description = description;
// obj.author=author;
blogData.push( {...userInfo })
// addedBlog.push(obj);
// console.log(addedBlog);
        const newRecord={...userInfo}
        setRecord([...record, newRecord]);
        setUserInfo({dish:"", description:"",author:""});

alert("Thankyou for sharing your memory with us🙏")
    }
    return(
        <div>
            <div className="w-4/12 m-auto mt-4 max-[410px]:w-6/12">
            <form className="space-y-2">
                <div>
                    <label>Name of the dish</label>
                    <div className="border border-gray-500 border-solid">
                        <input className="w-full" type="text" name="dish" value={userInfo.dish} onChange={handleInput}/>
                    </div>
                </div>
                <div>
                    <label>Description</label>
                    <div className="border border-gray-500 border-solid">
                        <textarea  rows={4} cols={40} className="w-full" name="description" value={userInfo.description} onChange={handleInput}/>
                    </div>
                </div>
                <div>
                    <label>Author</label>
                    <div className="border border-gray-500 border-solid">
                        <input className="w-full" type="text" name="author" value={userInfo.author} onChange={handleInput}/>
                    </div>
                </div>
                <div>
                    <button className="bg-blue-400 w-full rounded-sm" onClick={handleOnClick}>Add this to the blogs</button>
                </div>
            </form>
            
        </div>
        <div className="m-5 text-center">
        {record.map((item, id)=>{
            return(
                <div className="flex" key="id">
                    <p>dish: {item.dish}&nbsp;  </p>
                    <p> description: {item.description}&nbsp;</p>
                    <p> author: {item.author}&nbsp;</p>
                </div>
            )
        })}
    </div>
        </div>
    )
}

export default AddBlog;