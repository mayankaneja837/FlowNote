import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div className="flex justify-center">
        <div className=" max-w-xl ">
            <BlogCard
                authorName={"Mayank Aneja"}
                title={" How an ugly single page website makes 500$ with affiliate marketing "}
                content={"No need  to  create a fancy and modern website with hundred of pages to make money online.-- Making money online is a dream for many "}
                publishedDate={"2nd feb 2024"} />

            <BlogCard 
            authorName={"Payam Saderi"}
            title={"To PM2 , or Not to PM2: Embracing Docker for Node.js"}
            content={"We've got this teeny-tiny srvvice written Node.js , and like all the serivces in the world its availabilyu is very important to us."}
            publishedDate={"Oct 2nd,2023"}/>

            <BlogCard 
            authorName={"Ashish wallah"}
            title={"Google has finally dethroned ChatGPT"}
            content={"They finally did it -- When you look at what Google has just achieved, it's no wonder OpenAi suddenly released Sora a few hours later"}
            publishedDate={"Jan 20th,2004"}/>
        </div>
    </div>
}