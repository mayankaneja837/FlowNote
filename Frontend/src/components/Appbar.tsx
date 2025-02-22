import { Avatar } from "./BlogCard"

export const Appbar=()=>{
    return <div className="border-b border-slate-300 flex justify-between px-10 py-2">
        <div className="flex flex-col justify-center">
            FlowNote
        </div>
        <div className="cursor-pointer">
            <Avatar authorName="Mayank" />
        </div>
    </div>
}