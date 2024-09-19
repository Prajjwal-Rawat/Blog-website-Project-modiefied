import { NavLink } from "react-router-dom";
import Spinner from "./Spinner";



function Card({ post }) {


    return (
        <div className= "w-11/12 max-w-[650px] m-auto mb-2">

            <div className="flex flex-col gap-y-2 ">

                <NavLink className='w-fit' to= {`/blogs/${post.id}`}>
                <h1 className="font-bold text-lg">{post.title}</h1>
                </NavLink>

                <p>By {post.author} on <NavLink to={`/category/${post.category}`}>
                <span className="font-semibold underline">{post.category}</span>
                </NavLink>

                </p>

                <p>Posted On {post.date}</p>

                <p>{post.content}</p>


                <div className="text-blue-800 mb-2 text-[13px] flex space-x-1">
                    {
                        post.tags.map((tag, index) => ( 

                        
                              <NavLink key={index} to={`/tag/${tag}`}>
                              <span className="underline">{`#${tag}`}&nbsp;</span>
                              </NavLink>

                        ))

                    }
                </div>
            </div>


        </div>
    )
}

export default Card;