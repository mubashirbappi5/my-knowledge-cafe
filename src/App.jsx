
import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs'
import Bookmarks from './component/Bookmark/Bookmarks'
import Headers from './component/Headers'


function App() {
  const [bookmark, setbookmark] = useState([])
  const [readingtime, setreadingtime] =useState(0)
  const handleaddbookmark = (blog) =>{
    console.log(blog)
    const newbookmarks = [...bookmark,blog]
    setbookmark(newbookmarks)
  }
  const handlereadingtime = ( id,time) =>{
   const newreadingtime = readingtime +time
   console.log(newreadingtime)
   setreadingtime(newreadingtime)
   const remaingbookmark = bookmark.filter(book => book.id !== id);
   setbookmark(remaingbookmark)
  }
  
  return (
    <>
    <Headers/>
    <main className="md:grid grid-cols-12 w-11/12 mx-auto gap-5">
     <Blogs
      handleaddbookmark={handleaddbookmark}
      handlereadingtime={handlereadingtime} 
     
     />
     <Bookmarks 
     bookmark={bookmark}
     readingtime={readingtime}
      />
     </main>
    </>
  )
}

export default App
