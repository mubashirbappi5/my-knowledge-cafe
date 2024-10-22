import PropTypes from 'prop-types'

const Book = ({book}) => {
    console.log(book)
    const {title} = book
    return (
        <div>
            <h1 className='p-5 bg-white rounded-md font-bold my-2'>{title}</h1>
            
        </div>
    );
};
Book.propTypes = {
   
    book:PropTypes.object.isRequired
  };
export default Book;