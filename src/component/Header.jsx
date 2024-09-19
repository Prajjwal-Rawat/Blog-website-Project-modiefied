import { useContext } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { DarkmodeContext } from "../context/DarkmodeContext";
import { useNavigate } from "react-router-dom";

function Header(){

    const {lightMode, HandleDarkMode} = useContext(DarkmodeContext);
    const navigate = useNavigate();

    return(
        <div className="text-center relative">
            <header className={`fixed w-full top-0 border-b transition-all duration-1000 border-black  ${lightMode ? 'bg-white text-black' : 'bg-black text-white border-white'}`}>

                <h1 onClick={() => navigate('/')}
                className={`text-lg max-w-fit m-auto cursor-pointer transition-all duration-1000 font-bold p-4 `}>
                Daily Blogs
                </h1>

                <button onClick={() => HandleDarkMode()}
                className="fixed top-[1.4rem] right-12 text-lg">
                {lightMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
                </button>
            </header>
        </div>
    )
}

export default Header;