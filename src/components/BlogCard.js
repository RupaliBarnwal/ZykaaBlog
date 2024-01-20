

const BlogCard=(props)=>{
     return(
        
        <div className="w-2/12  border border-gray-300 border-solid shadow-md p-2 m-2 max-[410px]:w-full">
        <div className="text-center font-bold text-lg">
            {props.dish}
        </div>
        <div className="m-auto">
            <img alt="pic" src={!props.img ?"https://media-cdn.tripadvisor.com/media/photo-s/13/81/51/d4/big-menu-largejpg.jpg": props.img}/>
        </div>
        <div >
            {props.description}
        </div>
        <div className="text-end font-normal text-sm ">
            -{props.author}
        </div>
    </div>
     )
};

export default BlogCard;