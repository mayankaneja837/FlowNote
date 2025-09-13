import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b border-slate-300 flex justify-between px-10 py-2">
        <Link to={"/blogs"} >
            <div className="flex flex-col justify-center cursor-pointer pt-3.25 text-lg font-serif font-bold">
                FlowNote
            </div>
        </Link>

        <div className="cursor-pointer flex flex-row pt-2">
            
            <Link to={"/publish"}>
            <button type="button" className="mr-8  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg cursor-pointer text-sm  py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 px-5">New</button>
            </Link>
            <div className="pt-1"><Avatar authorName="Mayank" /></div>
            
        </div>
    </div>
}