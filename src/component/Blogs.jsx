
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";


const Blogs = () => {
    const [blogs,setblogs] = useState([])
    useEffect(()=>{
        fetch('/public/blogs.json')
        .then(res=> res.json())
        .then(data => setblogs(data))
    },[])
    return (
        <div className="col-span-8">
            <h1>hi blog:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;