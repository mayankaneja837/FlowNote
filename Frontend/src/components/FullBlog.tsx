import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="flex  justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl">
                <div className="col-span-8">
                    <div className=" text-5xl font-extrabold">
                        {blog.title.toUpperCase()}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 2nd Feb,2024
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="pb-5 text-xl">
                        Author
                    </div>
                    <div className="flex flex-row">
                        <div className="cursor-pointer">
                        <Avatar authorName={blog.author.name} />
                        </div>
                        <div className="px-3 text-2xl font-bold">
                            {blog.author.name}
                        </div>
                    </div>
                    <div className="pt-3 text-slate-400">
                        Master of mirth,purveyor of puns,and the funniest person of the kingdom
                    </div>
                </div>
            </div>
        </div>
    </div>
}