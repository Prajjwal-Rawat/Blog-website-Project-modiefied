import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { DarkmodeContext } from "../context/DarkmodeContext";



function Fotter(){

    const {totalPages, page, setPage, } = useContext(BlogContext);
    
    const {lightMode} = useContext(DarkmodeContext);

    function HandlePrevious(){
      if(page > 1){
        setPage(page - 1);
      }
    }

    function HandleNext(){
       if(page < totalPages){
        setPage(page + 1);
       }
    }
    

    return(
        <div className="relative">
            <footer className={`fixed bottom-0 w-full flex justify-around border-t border-slate-400 p-3 items-center transition-all duration-1000 ${lightMode ? ' bg-white' : 'bg-black border-white'}`}>
                <div className="space-x-3 ">

                    <button onClick={HandlePrevious}
                    className={`border-2 shadow-md shadow-black active:shadow-none px-2 py-1 border-slate-400 text-center ${page === 1 ? 'opacity-90 shadow-none': ''}`}>
                    Previous
                    </button>

                    <button onClick={HandleNext}
                    className={`border-2 shadow-md shadow-black active:shadow-none px-4 py-1 border-slate-400 text-center ${page === totalPages ? 'opacity-90 shadow-none': ''}`}>
                    Next
                    </button>

                </div>

                <div className="flex justify-center">
                    <p>
                        Page {page} of {totalPages}
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Fotter;