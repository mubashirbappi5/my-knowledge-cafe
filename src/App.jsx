
import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs'
import Bookmarks from './component/Bookmark/Bookmarks'
import Headers from './component/Headers'


function App() {
  const [bookmark, setbookmark] = useState([])
  const handleaddbookmark = (blog) =>{
    console.log(blog)
    const newbookmarks = [...bookmark,blog]
    setbookmark(newbookmarks)
  }
  
  return (
    <>
    <Headers/>
    <main className="md:grid grid-cols-12 w-11/12 mx-auto gap-5">
     <Blogs handleaddbookmark={handleaddbookmark} />
     <Bookmarks bookmark={bookmark} />
     </main>
    </>
  )
}

export default App
