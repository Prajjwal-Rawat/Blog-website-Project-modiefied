import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import Spinner from "./Spinner";
import Card from "./Card";


function Blogs(){

    const {blogs, loading} = useContext(BlogContext);

    return(
        <div className="pt-[5.5rem] pb-[5.5rem] ">
            <div>
                {
                    loading ? (<Spinner/>) : 
                    (
                       blogs.length === 0 ? 
                       (
                           <p className="h-screen flex justify-center items-center text-lg font-bold">No Blogs Found</p>
                       ): 
                       (
                          blogs.map((post) => <Card key={post.id} post ={post} />)
                       )
                    )
                }
            </div>
        </div>
    )
}

export default Blogs;