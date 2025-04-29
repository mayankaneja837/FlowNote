import { Circle } from "./BlogCard"
export const BlogSkeleton=()=>{
    return <div>

<div role="status" className=" animate-pulse">
    <div className="p-4 flex flex-col border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
            <div className="h-4 w-4 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="pl-2 pt-1">
                    <div className="flex flex-row">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        <div className="pl-2 flex justify-center pt-1">
                            <Circle />
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
    
                </div>
            </div>
            <div className="text-xl font-bold pt-2">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="pt-4">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            
        </div>
   
    <span className="sr-only">Loading...</span>
</div>


    </div>
}