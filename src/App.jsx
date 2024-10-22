
import './App.css'
import Blogs from './component/blogs'
import Bookmarks from './component/Bookmark/Bookmarks'
import Headers from './component/Headers'

function App() {
  
  return (
    <>
    <Headers/>
    <main className="md:grid grid-cols-12 w-11/12 mx-auto">
     <Blogs/>
     <Bookmarks/>
     </main>
    </>
  )
}

export default App
