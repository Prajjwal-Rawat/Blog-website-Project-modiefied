import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../component/Blogs";
import Fotter from "../component/Fotter";
import { useContext, useEffect } from "react";
import { DarkmodeContext } from "../context/DarkmodeContext";
import { BlogContext } from "../context/BlogContext";




function CategoryBlogs(){

    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1).replaceAll("%20"," ");

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
            <div className="pt-[6rem] w-11/12 max-w-[650px] m-auto mb-[-3rem] space-x-4">

            <button className={`border shadow-sm shadow-black border-black active:shadow-none transition-all duration-700 px-5 py-2 font-bold ${lightMode ? '' : 'border-white shadow-white'}`}
             onClick={() => navigate(-1)}>
              Back
            </button>

            <span className="font-bold text-lg tracking-wider ">Blogs On <span className="text-xl underline">{category}</span></span>
            </div>

            <Blogs/>
            <Fotter/>
        </div>
    )
}

export default CategoryBlogs;