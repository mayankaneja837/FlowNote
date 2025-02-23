import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar=()=>{
    return <div className="border-b border-slate-300 flex justify-between px-10 py-2">
        <Link to={"/blogs"} >
        <div className="flex flex-col justify-center cursor-pointer">
            FlowNote
        </div>
        </Link>
        <div className="cursor-pointer">
            <Avatar authorName="Mayank" />
        </div>
    </div>
}