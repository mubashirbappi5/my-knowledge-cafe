import PropTypes from 'prop-types' 
import Book from './Book';
const Bookmarks = ({bookmark,readingtime}) => {
   
    
    return (
        <div className="col-span-4 bg-[#1111110D] shadow-sm rounded-sm p-4">
            <div>
                <h2 className='text-center font-bold  my-4 p-4 border-2 rounded-md border-blue-600 bg-blue-200'>Spent time on read : {readingtime} min</h2>
            </div>
            <h2 className='text-center font-bold'>Book Marks:{bookmark.length}</h2>
            {
                bookmark.map(book =><Book key={book.id} 
                    book={book}
                ></Book>)

            }
            
           
            
        </div>
    );
};
Bookmarks.propTypes = {
   
    bookmark:PropTypes.object.isRequired,
    readingtime:PropTypes.number.isRequired
  };

export default Bookmarks;