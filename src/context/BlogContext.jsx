import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";



export const BlogContext = createContext();



function BlogContextProvider({children}){
    
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [blogs, setBlogs] = useState([]);
    
    let url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;

    async function fetchBlogs(tag, category, page) {

        if(tag){
            url += `&tag=${tag}`
        }else if(category){
            url += `&category=${category}`
        }

        setLoading(true);

        try{
            const response = await axios.get(url);
            const {data} = response;
            setBlogs(data.posts);
            setTotalPages(data.totalPages);
            
        }catch(error){
            alert('Error fetching blogs', error);
            setBlogs([]);
            setTotalPages([]);
            setPage([]);
        }

        setLoading(false);
    }
    

    
    

    const data = {
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        blogs,
        setBlogs,
        fetchBlogs,
    }

    return <BlogContext.Provider value = {data}>
            {children} 
           </BlogContext.Provider>
}

export default BlogContextProvider;