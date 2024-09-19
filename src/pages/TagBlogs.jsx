import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../component/Blogs";
import Fotter from "../component/Fotter";
import { useContext, useEffect } from "react";
import { DarkmodeContext } from "../context/DarkmodeContext";
import { BlogContext } from "../context/BlogContext";



function TagBlogs(){

    const navigate = useNavigate()
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1).replaceAll('%20', " ")

    const {lightMode} = useContext(DarkmodeContext);

    const {page, totalPages, setPage} = useContext(BlogContext);
    

        if(page > totalPages){
            setPage(totalPages);
        }

        useEffect(() => {
            setPage(page);
        },[location.pathname])
    

    return(
        <div>
            <div className="pt-[6rem] w-screen max-w-[650px] m-auto mb-[-3rem] space-x-4">

            <button className={`border shadow-sm shadow-black border-black active:shadow-none transition-all duration-700 px-5 py-2 font-bold ${lightMode ? '' : 'border-white shadow-white'}`}
            onClick={() => navigate(-1)}>
            Back
            </button>
            <span className="font-bold text-lg tracking-wider ">Blogs Tagged <span className="text-xl underline">{tag}</span> </span>

            </div>
            <div>
            <Blogs/>
            <Fotter/>
            </div>
        </div>
    )
}

export default TagBlogs;