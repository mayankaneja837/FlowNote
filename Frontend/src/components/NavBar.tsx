import { Link } from "react-router-dom"

export const NavBar=()=>{
    return <div className="flex justify-between  w-full border-b border-black pb-4">

        <Link to={"/"}>
        <div className="flex flex-col justify-center pl-10 text-2xl cursor-pointer pt-4 font-bold font-serif">
            FlowNote
        </div>
        </Link>

        <div>
        <div className="flex flex-row pr-10 space-x-6">
            <div className="pt-4 cursor-pointer">
                Our Story
            </div>
            <div className="pt-4 cursor-pointer">
                Membership
            </div>

            <Link to={"/signup"}>
            <div className="pt-4 cursor-pointer">
                Write
            </div>
            </Link>
            <Link to={"/signup"}>
            <div className="pt-2">
               <button type="button" className="bg-black text-white cursor-pointer rounded-4xl p-2">Get Started</button>
            </div>
            </Link>
            
        </div>
        </div>
    </div>
}