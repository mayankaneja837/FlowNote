import { FullBlog } from "../components/FullBlog"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"


export const Blog = () => {

    const { id } = useParams() || ""
    const { loading, blog } = useBlog({
        id: id || ""
    })
    if (loading) {
        return <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">

            Loading.....

            </div>
           
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}