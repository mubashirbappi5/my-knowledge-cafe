
import PropTypes from 'prop-types' 
import { IoBookmarkOutline } from "react-icons/io5";
const Blog = ({blog,handleaddbookmark,handlereadingtime}) => {
   
    const { id,title,cover,reading_time,hashtag,posted_date,author,author_img} = blog
    return (
        <div className='bg-white shadow-sm p-4 space-y-5 mb-8'>
            <img className='rounded-md' src={cover} alt="" />
            
            <div className="flex justify-between items-center">
                <div className="flex  items-center gap-4">
                    <img className='w-20 ' src={author_img} alt="" />
                    <div>
                        <h2 className='font-bold text-2xl'>{author}</h2>
                        <p className='text-[#11111199]'>{posted_date}</p>
                    </div>


                </div>
                <div className='flex gap-3'>
                    <p className='text-[#11111199] '>{reading_time} min read </p>
                    <button  onClick={()=>handleaddbookmark(blog)}><IoBookmarkOutline /></button>

                </div>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
          
                <div>
                <a href='' className='text-[#11111199]'>{hashtag}</a>
                </div>
             
              <button onClick={()=>handlereadingtime( id,reading_time)} className="text-blue-700 underline">mark as read</button>
              
           
            
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleaddbookmark:PropTypes.func.isRequired,
    handlereadingtime:PropTypes.func.isRequired
  };
  

export default Blog;