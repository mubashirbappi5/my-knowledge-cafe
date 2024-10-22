
import PropTypes from 'prop-types' 
const Blog = ({blog}) => {
    console.log(blog)
    const {title,cover,reading_time,hashtag,posted_date,author,author_img} = blog
    return (
        <div className='bg-white shadow-sm p-4 space-y-5'>
            <img className='rounded-md' src={cover} alt="" />
            
            <div className="flex justify-between items-center">
                <div className="flex  items-center gap-4">
                    <img className='w-20 ' src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p className='text-[#11111199]'>{posted_date}</p>
                    </div>


                </div>
                <div>
                    <p className='text-[#11111199]'>{reading_time} read</p>

                </div>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
          
                <p className='text-[#11111199]'>{hashtag}</p>
              <button className="text-blue-700 underline">mark as read</button>
           
            
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
  };
  

export default Blog;