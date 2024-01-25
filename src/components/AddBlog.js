import { useState } from "react";
import blogData from "../utils/blogData";


const AddBlog=()=>{
    //const[dish, setDish]= useState("");
    //const[description, setDescription]= useState("");
    //const[author, setAuthor]= useState("");
    
    // const [addedBlog, setAddedBlog]=useState([blogData])
    const [userInfo, setUserInfo]=useState({
        dish:"",description:"",author:""
    })
    const[record, setRecord]=useState([]);
    const[editButton, setEditButton]= useState(false);
    
    const[editIndex, setEditIndex]=useState("");
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserInfo({...userInfo, [name]:value});
    }
    const handleOnClick=(e)=>{
        e.preventDefault();      
       if(!editButton){
        blogData.push( {...userInfo })
        const newRecord={...userInfo}
        setRecord([...record, newRecord]);
        setUserInfo({dish:"", description:"",author:""});
        alert("Thankyou for sharing your memory with us🙏")
       }
       else{
        const tempData= record;
        Object.assign(tempData[editIndex], userInfo)
        setUserInfo({dish:"", description:"",author:""});
        setEditButton(false);
        alert("Thankyou for sharing your memory with us🙏")
       }
       record.map((item, index)=>(
        console.log(index)))
        console.log(record);
    }
    
    const handleDelete=(index)=>{
        const filterData= record.filter((item,i)=> i!==index);
        setRecord(filterData);
        
    }
    const handleEdit=(index)=>{
        const temp= record[index];
        setUserInfo({dish:temp.dish, description:temp.description,author:temp.author})
        setEditButton(true);
        setEditIndex(index);
        
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
                    <button className="bg-blue-400 w-full rounded-sm" onClick={handleOnClick}>{editButton ? "Update this Blog": "Add this to the blogs"}</button>
                </div>
            </form>
            
        </div>
    <div >
        <table className=" mt-5 w-full text-center">
            <thead>
                <tr>
                    <th>Dish</th>
                    <th>Description</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                
                {record.map((item, index)=>(
                <tr key="index">
                    <td>{item.dish}  </td>
                    <td>{item.description}</td>
                    <td>{item.author}</td>
                    <td>
                        <button className="bg-yellow-200 p-1 m-1"onClick={()=>handleEdit(index)}>Edit</button>
                    </td>
                    <td>
                        <button className="bg-red-200 p-1 m-1" onClick={()=>handleDelete(index)}>Delete</button>
                        
                    </td>
                    </tr>
            ))}
                
            </tbody>
        </table>
    </div>
        </div>
    )
}

export default AddBlog;