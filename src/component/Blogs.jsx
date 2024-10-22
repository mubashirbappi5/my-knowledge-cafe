
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleaddbookmark}) => {
    const [blogs,setblogs] = useState([])
    useEffect(()=>{
        fetch('/public/blogs.json')
        .then(res=> res.json())
        .then(data => setblogs(data))
    },[])
    return (
        <div className="col-span-8">
          
            {
                blogs.map(blog => <Blog
                     key={blog.id} 
                     blog={blog}
                     handleaddbookmark={handleaddbookmark}
                     ></Blog>)
            }
            
        </div>
    );
};
Blogs.propTypes = {
   
    handleaddbookmark:PropTypes.func.isRequired
  };
export default Blogs;