import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../component/Spinner";
import Card from "../component/Card";
import { DarkmodeContext } from "../context/DarkmodeContext";



function RelatedBlogs(){
   
    const navigate = useNavigate();
    const [clickedBlog, setClickedBlog] = useState([]);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [loader, setLoader] = useState(true);

    const {lightMode} = useContext(DarkmodeContext);

    const location = useLocation();
    const blogId = location.pathname.split('/').at(-1);

    const url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;

    
    async function fetchRelatedBlogs() {
        
        setLoader(true);
        try{
            const response = await axios.get(url);
            setClickedBlog(response.data.blog);
            setRelatedBlogs(response.data.relatedBlogs);
        }catch(error){
            alert('Failed in Api call', error);
        }

        setLoader(false);
    }
    
    useEffect(() => {
        if(location.pathname.includes('blogs')){
            fetchRelatedBlogs();
        }
    },[location.pathname]);

    return(
        <div className="pt-[5.5rem] pb-[4.5rem] w-11/12 max-w-[650px] m-auto">
            <div className={`mb-5 border border-black rounded-sm  shadow-sm shadow-black active:shadow-none flex items-center transition-all duration-700 justify-start w-[90px] ${lightMode ? '': 'border-white shadow-white'}`}>
            <button onClick={() => navigate(-1)} className={`py-2 px-2 w-full font-bold`} >
                Back
            </button>
            </div>

            {
                loader ? (<Spinner/>) : (

                 clickedBlog || relatedBlogs ? (
                    <div className="flex flex-col items-center">
                        <Card post = {clickedBlog}/>
                        <h1 className="font-bold text-lg mt-3 underline mb-9 text-start">Related Blogs</h1>
                        {
                            relatedBlogs.map((blog) => {
                                return <Card key={blog.id} post = {blog}/>
                            })
                        }
                    </div>
                 ) : (<p>No Blogs found</p>)
                ) 
            }
        </div>
    )
}

export default RelatedBlogs;