

function Spinner(){
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="m-auto">
            <div className="custom-loader ml-3 mb-2"></div>
            <div className=" font-bold text-lg">Loading...</div>
            </div>
        </div>
    )
}

export default Spinner;