import PropTypes from 'prop-types' 
import Book from './Book';
const Bookmarks = ({bookmark}) => {
   
    
    return (
        <div className="col-span-4 bg-[#1111110D] shadow-sm rounded-sm p-4">
            <h2 className='text-center font-bold'>Book Marks:{bookmark.length}</h2>
            {
                bookmark.map(book =><Book key={book.id} book={book}></Book>)

            }
            
           
            
        </div>
    );
};
Bookmarks.propTypes = {
   
    bookmark:PropTypes.object.isRequired
  };

export default Bookmarks;