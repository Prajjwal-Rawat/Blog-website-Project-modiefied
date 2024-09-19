import Header from './component/Header'
import { useContext, useEffect } from 'react'
import { BlogContext } from './context/BlogContext'
import { DarkmodeContext } from './context/DarkmodeContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import Home from './pages/Home'
import RelatedBlogs from './pages/RelatedBlogs'
import TagBlogs from './pages/TagBlogs'
import CategoryBlogs from './pages/CategoryBlogs'


function App() {

  const {fetchBlogs, page} = useContext(BlogContext);

  const {lightMode} = useContext(DarkmodeContext);

  // const [searchParam, setSearchParam] = useSearchParams();

  const location = useLocation();  

  useEffect(() => {
   

   if(location.pathname.includes('tag')){
    const tag = location.pathname.split('/').at(-1)
    fetchBlogs(tag, null, Number(page));
   }else if(location.pathname.includes('category')){
    const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
    fetchBlogs(null, category, Number(page));
   }else{
    fetchBlogs();
   }

  }, [location.pathname, page])



  return (
   <div className={`transition-all max-h-fit min-h-screen duration-1000 ${lightMode ? 'bg-white' : 'bg-black text-white'}`}>
    
        <Header/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/blogs/:blogId' element = {<RelatedBlogs/>}/>
          <Route path='/tag/:tag' element = {<TagBlogs/>}/>
          <Route path='/category/:category' element = {<CategoryBlogs/>}/>
        </Routes>
  
   </div>
  )
}

export default App
